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

module.exports.getAllDefects = async (req, res) => {
    const reports = await Defect.aggregate([
        {
            $match: {
                date: {
                    $gte: new Date("2020-01-05"),
                    $lte: new Date("2021-04-17"),
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
            $project: {
                _id: 0,
                objectId: 1,
                defects: {
                    train: "$train",
                    date: "$date",
                    time: "$time",
                    cs: "$cs.nameL",
                },
            },
        },
        {
            $group: {
                _id: "$objectId",
                defects: { $push: "$defects" },
            },
        },
        {
            $lookup: {
                from: "objects",
                localField: "_id",
                foreignField: "_id",
                as: "ob",
            },
        },
        { $unwind: "$ob" },
    ]);

    res.status(201).json(reports);
};
