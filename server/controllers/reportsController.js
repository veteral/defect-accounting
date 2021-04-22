const config = require("config");
const moment = require("moment");
//const { getData, setData, setDataA } = require("./fileController");
//const { v4: uuidv4 } = require("uuid");
const Object = require("../models/Object");
const Defect = require("../models/Defect");
const mongoose = require("mongoose");

module.exports.getLog = async (req, res) => {
    const { start, end } = req.params;

    console.log(new Date(start));

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

    console.log(log);

    res.status(201).json(log);
};

module.exports.getAnalysis = async (req, res) => {
    const { start, end, period } = req.params;

    const reports = await Defect.aggregate([
        // выбираем срабатывания за период
        {
            $match: {
                date: {
                    $gte: new Date(start),
                    $lte: new Date(end),
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

        // "pipeline":[
        //     {"$match":{"$expr":{"$in":["$userID","$$appliedUsers"]}}},
        //     {"$addFields":{
        //       "status":{"$cond":[{"$in":["$userID","$$shortListedUsers"]},"shortlisted","not shortlisted"]}
        //     }}
        //   ],

        {
            $lookup: {
                from: "defects",
                //localField: "_id",
                //foreignField: "objectId",
                let: { defectId: "$_id", dateStart: new Date("2021-04-01") },
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

        // {
        //     $lookup: {
        //         from: "defects",
        //         localField: "_id",
        //         foreignField: "objectId",
        //         as: "defect",
        //     },
        // },
        { $unwind: "$defect" },
        { $sort: { date: 1 } },

        // {
        //     $match: {
        //         date: {
        //             $gte: new Date(start),
        //             $lte: new Date(end),
        //         },
        //     },
        // },

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
                //name: 1,
                //addrres: 1,
                //passwords: 1,
                //objectId: 1,
                defects: {
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
                    train: 1,
                    date: 1,
                    time: 1,
                    cause: 1,
                },
            },
        },
    ]);

    // const reports = await Defect.aggregate([
    //     {
    //         $match: {
    //             date: {
    //                 $gte: new Date(start),
    //                 $lte: new Date(end),
    //             },
    //         },
    //     },
    //     //{ $sort: { date: 1 } },
    //     {
    //         $lookup: {
    //             from: "causes",
    //             localField: "causeId",
    //             foreignField: "_id",
    //             as: "cs",
    //         },
    //     },
    //     { $unwind: "$cs" },

    //     {
    //         $project: {
    //             _id: 0,
    //             objectId: 1,
    //             defects: {
    //                 train: "$train",
    //                 date: {
    //                     $dateToString: {
    //                         format: "%d-%m-%G",
    //                         date: "$date",
    //                     },
    //                 },
    //                 time: "$time",
    //                 cause: "$cs.nameL",
    //             },
    //         },
    //     },
    //     {
    //         $group: {
    //             _id: "$objectId",
    //             defects: { $push: "$defects" },
    //         },
    //     },
    //     {
    //         $lookup: {
    //             from: "objects",
    //             localField: "_id",
    //             foreignField: "_id",
    //             as: "object",
    //         },
    //     },
    //     { $unwind: "$object" },
    //     {
    //         $project: {
    //             _id: 1,
    //             name: "$object.name",
    //             passwords: "$object.passwords",
    //             address: "$object.address",
    //             defects: {
    //                 train: 1,
    //                 date: 1,
    //                 time: 1,
    //                 cause: 1,
    //             },
    //         },
    //     },
    // ]);

    //console.log("reports", reports);

    res.status(201).json(reports);
};
