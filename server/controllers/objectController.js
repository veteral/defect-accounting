//const config = require("config");
const moment = require("moment");
const Object = require("../models/Object");
const Defect = require("../models/Defect");
const mongoose = require("mongoose");

module.exports.getAllObjects = async (req, res) => {
    try {
        const objects = await Object.find({}).sort({ passwords: 1 });
        res.status(201).json(objects);
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.addObject = async (req, res) => {
    try {
        console.log(req.body);

        let object = new Object({ ...req.body });

        await object.save();

        //console.log("End");

        res.status(201).json(object);
    } catch (e) {
        console.log(`При добавлении объекта произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.editObject = async (req, res) => {
    try {
        // const objects = await Object.find({}).sort({ passwords: 1 });
        const id = req.params.id;
        const values = req.body;

        if (!id) {
            return res
                .status(400)
                .json({ message: "file not found", status: 400 });
        } else {
            await Object.updateOne({ _id: id }, { ...values });
            return res
                .status(200)
                .json({ message: "File was edited", status: 200 });
        }
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.deleteObject = async (req, res) => {
    try {
        // const objects = await Object.find({}).sort({ passwords: 1 });
        await Defect.deleteMany({ objectId: req.params.id });
        await Object.deleteOne({ _id: req.params.id });

        return res
            .status(200)
            .json({ message: "File was deleted", status: 200 });
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.getDuble = async (req, res) => {
    try {
        const control = await Object.find({ control: true });
        res.status(201).json(control);
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.addDefect = async (req, res) => {
    try {
        const { date, time, objectId, train } = req.body;
        let isControl = false;

        const timeStr = moment(time).format("HH:mm");

        //Добавляем срабатывание в базу данных
        let addDefect = new Defect({
            ...req.body,
            time: timeStr,
        });

        await addDefect.save();

        // определяем, было ли 3 и более срабатываний шлейфа за предыдущих 30 дней
        // елси да, то ставим объект на контроль
        const ago30Days = new Date(date).setDate(new Date(date).getDate() - 30);

        console.log("date", date);
        console.log("new date", new Date(ago30Days));

        const count = await Defect.aggregate([
            {
                $match: { objectId: mongoose.Types.ObjectId(objectId) },
            },
            {
                $match: {
                    $expr: {
                        $and: [
                            { $gte: ["$date", new Date(ago30Days)] },
                            { $lte: ["$date", new Date(date)] },
                            { $eq: ["$train", train] },
                        ],
                    },
                },
            },
            { $count: "count" },
        ]);

        console.log("count", count);
        if (count[0].count >= 3) {
            isControl = true;
            await Object.updateOne({ _id: objectId }, { control: isControl });
            console.log("control - TRUE");
        }

        //console.log("send json", count);

        res.status(201).json({ control: isControl });
    } catch (e) {
        console.log(`При добавлении срабатывания, произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.getDefectsIdObject = async (req, res) => {
    const { id } = req.query;

    //console.log("objectId", id);

    const defects = await Defect.aggregate([
        //фильтруем сработки по id объекта
        {
            $match: { objectId: mongoose.Types.ObjectId(id) },
        },
        //объединяем коллекции срабатываний и видов срабатываний
        {
            $lookup: {
                from: "causes",
                localField: "causeId",
                foreignField: "_id",
                as: "cs",
            },
        },
        //разворачиваем массив
        { $unwind: "$cs" },
        { $sort: { date: 1 } },
        //формируем новый вывод
        {
            $project: {
                _id: 1,
                train: 1,
                date: {
                    $dateToString: { format: "%d-%m-%Y", date: "$date" },
                },
                time: 1,
                cause: "$cs.nameL",
            },
        },
        // { $sort: { date: 1 } },
    ]);

    //console.log("defects", defects);
    res.status(201).json(defects);
};

module.exports.deleteDefect = async (req, res) => {
    console.log("Delte Defect", req.params.id);

    try {
        const { id } = req.params;
        const defect = await Defect.findOne({ _id: id });
        if (!defect) {
            return res.status(400).json({ message: "file not found" });
        }
        await defect.remove();
        return res
            .status(200)
            .json({ message: "File was deleted", status: 200 });
    } catch (e) {
        console.log(e);
        return res.status(400).json({ message: "Dir is not empty" });
    }
};

module.exports.deleteDuble = async (req, res) => {
    try {
        // const objects = await Object.find({}).sort({ passwords: 1 });
        const id = req.params.id;

        if (!id) {
            return res
                .status(400)
                .json({ message: "file not found", status: 400 });
        } else {
            await Object.updateOne({ _id: id }, { control: false });
            return res
                .status(200)
                .json({ message: "File was update", status: 200 });
        }
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};
