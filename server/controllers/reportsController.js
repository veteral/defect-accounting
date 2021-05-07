const Defect = require("../models/Defect");

module.exports.getLog = async (req, res) => {
    const { start, end } = req.params;

    const log = await Defect.aggregate([
        {
            $match: {
                date: {
                    $gte: new Date(start),
                    $lte: new Date(end),
                },
            },
        },
        {
            $lookup: {
                from: "causes",
                localField: "causeId",
                foreignField: "_id",
                as: "cs",
            },
        },
        { $unwind: "$cs" },
        {
            $lookup: {
                from: "objects",
                localField: "objectId",
                foreignField: "_id",
                as: "obj",
            },
        },
        { $unwind: "$obj" },
        {
            $project: {
                _id: 1,
                name: "$obj.name",
                passwords: "$obj.passwords",
                address: "$obj.address",
                train: 1,
                date: { $dateToString: { format: "%d-%m-%G", date: "$date" } },
                time: 1,
                cause: "$cs.nameL",
            },
        },
        { $sort: { date: 1 } },
    ]);

    res.status(201).json(log);
};

module.exports.getAnalysis = async (req, res) => {
    const { start, end, period } = req.params;

    console.log("start");
    switch (period) {
        case "1":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 2);
            break;
        case "2":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 3);
            break;
        case "3":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 6);
            break;
        case "4":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 12);
            break;
        case "5":
            periodDate = new Date("2007-01-01");
            break;
        default:
            periodDate = new Date("2007-01-01");
    }

    const alarmObjects = await Defect.aggregate([
        // выбираем срабатывания за период
        {
            $match: {
                $expr: {
                    $and: [
                        { $gte: ["$date", new Date(start)] },
                        { $lte: ["$date", new Date(end)] },
                    ],
                },
            },
        },
        { $sort: { date: 1 } },
        // // выбираем данные по сработаным объектам,
        // // разворачиваем полученный массив и формируем ввывод
        {
            $lookup: {
                from: "objects",
                localField: "objectId",
                foreignField: "_id",
                as: "object",
            },
        },
        { $unwind: "$object" },
        {
            $project: {
                _id: "$objectId",
                name: "$object.name",
                address: "$object.address",
                password: "$object.passwords",
                //date: "$date",
            },
        },
    ]);

    //let unicArrObjects = [];

    // получаем массив уникальных объектов
    // for (const item of alarmObjects) {
    //     let idx = unicArrObjects.find((i) => String(i._id) == String(item._id));
    //     if (idx == undefined) {
    //         item.defects = [];
    //         unicArrObjects.push(item);
    //     }
    // }

    // к объектам добавляем массив срабатываний
    for (const item of alarmObjects) {
        const defects = await Defect.aggregate([
            //         // выбираем срабатывания за период
            {
                $match: {
                    $expr: {
                        $and: [
                            { $eq: ["$objectId", item._id] },
                            { $gt: ["$date", new Date(periodDate)] },
                        ],
                    },
                },
            },
            { $sort: { date: 1 } },
            // выбираем данные по сработаным объектам,
            // разворачиваем полученный массив и формируем ввывод
            {
                $lookup: {
                    from: "causes",
                    localField: "causeId",
                    foreignField: "_id",
                    as: "cause",
                },
            },
            { $unwind: "$cause" },
            {
                $project: {
                    _id: 1,
                    train: 1,
                    time: 1,
                    date: {
                        $dateToString: {
                            format: "%d-%m-%G",
                            date: "$date",
                        },
                    },
                    cause: "$cause.nameL",
                },
            },
        ]);

        item.defects = [...defects];
    }

    res.status(201).json(alarmObjects);
};
