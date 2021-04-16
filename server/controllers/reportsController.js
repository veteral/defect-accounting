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
    //const { id } = req.query;

    //console.log("objectId", id);

    const defects = await Defect.aggregate([
        // {
        //     $match: {
        //         objectId: mongoose.Types.ObjectId("6075a63a2ffefd0a6cd4e8e3"),
        //     },
        // },
        {
            $project: {
                date: {
                    $dateFromString: {
                        dateString: "$date",
                        //format: "%d-%m-%Y",
                    },
                },
            },
        },
    ]);

    //console.log("defects", defects);
    res.status(201).json(defects);
};
