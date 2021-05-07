const config = require("config");
const moment = require("moment");
//const { getData, setData, setDataA } = require("./fileController");
//const { v4: uuidv4 } = require("uuid");
const Object = require("../models/Object");
const Defect = require("../models/Defect");
const mongoose = require("mongoose");

//const path = config.get("pathDB");
//const DBObjects = path + "objects.json";
//const DBCause = path + "cause.json";

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

module.exports.getControl = async (req, res) => {
    try {
        const control = await Object.find({ control: true });
        res.status(201).json(control);
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.getAllObjects = async (req, res) => {
    try {
        const objects = await Object.find({}).sort({ passwords: 1 });
        res.status(201).json(objects);
    } catch (e) {
        console.log(`произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.addDefect = async (req, res) => {
    console.log(req.body);
    try {
        const { date, time, objectId, train } = req.body;
        let control = false;

        const timeStr = moment(time).format("HH:mm");

        //Добавляем срабатывание в базу данных
        let addDefect = new Defect({
            ...req.body,
            time: timeStr,
        });

        await addDefect.save();

        // определяем, было ли 3 и более срабатываний шлейфа за предыдущих 30 дней
        // елси да, то ставим объект на контроль
        // const ago30Days = new Date(date).setDate(new Date(date).getDate() - 30);

        // console.log("date", date);
        // console.log("new date", new Date(ago30Days));

        // const count = await Defect.aggregate([
        //   {
        //     $match: { objectId: mongoose.Types.ObjectId(objectId)}
        //   },
        //   {
        //     $match: {
        //       $expr: {
        //           $and: [
        //               { $gte: ["$date", new Date(ago30Days)] },
        //               { $lte: ["$date", new Date(date)] },
        //               { $eq: ["$train", train]}
        //           ],
        //       },
        //   },
        //   },
        //   {"$count" : "count"}

        // ]);

        // if(count[0].count >= 3){
        //   control = true;
        // }

        //console.log("send json", count);

        res.status(201).json(addDefect);
    } catch (e) {
        console.log(`При добавлении срабатывания, произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.getDefects = async (req, res) => {
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
    ]);

    //console.log("defects", defects);
    res.status(201).json(defects);
};
