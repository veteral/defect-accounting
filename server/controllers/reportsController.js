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
    let periodDate;

    switch (period) {
        case "1":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 2);
            break;
        case "2":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 6);
            break;
        case "3":
            periodDate = new Date(end).setMonth(new Date(end).getMonth() - 12);
            break;
        case "4":
            periodDate = new Date("2007-01-01");
            break;
        default:
            periodDate = new Date("2007-01-01");
    }

    const reports = await Defect.aggregate([
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
        // из полученного результата получаем id объектов котрые сработали
        {
            $group: {
                _id: "$objectId",
            },
        },
        // выбираем данные по сработаным объектам,
        // разворачиваем полученный массив и формируем ввывод
        {
            $lookup: {
                from: "objects",
                localField: "_id",
                foreignField: "_id",
                as: "object",
            },
        },
        { $unwind: "$object" },
        {
            $project: {
                _id: 1,
                name: "$object.name",
                address: "$object.address",
                password: "$object.passwords",
            },
        },
        {
            $lookup: {
                from: "defects",
                let: { defectId: "$_id", dateStart: new Date(periodDate) },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ["$$defectId", "$objectId"] },
                                    { $gt: ["$date", "$$dateStart"] },
                                ],
                            },
                        },
                    },
                ],
                as: "defect",
            },
        },
        { $unwind: "$defect" },
        { $sort: { "defect.date": 1 } },
        {
            $lookup: {
                from: "causes",
                localField: "defect.causeId",
                foreignField: "_id",
                as: "cause",
            },
        },
        { $unwind: "$cause" },

        {
            $project: {
                _id: 1,
                defects: {
                    defectId: "$defect._id",
                    train: "$defect.train",
                    date: {
                        $dateToString: {
                            format: "%d-%m-%G",
                            date: "$defect.date",
                        },
                    },
                    time: "$defect.time",
                    cause: "$cause.nameL",
                },
            },
        },
        {
            $group: {
                _id: "$_id",
                defects: { $push: "$defects" },
            },
        },
        {
            $lookup: {
                from: "objects",
                localField: "_id",
                foreignField: "_id",
                as: "object",
            },
        },
        { $unwind: "$object" },
        {
            $project: {
                _id: 1,
                name: "$object.name",
                address: "$object.address",
                passwords: "$object.passwords",
                defects: {
                    defectId: 1,
                    train: 1,
                    date: 1,
                    time: 1,
                    cause: 1,
                },
            },
        },
        // { $sort: { defects.date: 1 } },
    ]);

    res.status(201).json(reports);
};
