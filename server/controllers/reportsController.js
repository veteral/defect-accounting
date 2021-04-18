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

  // const def = await Defect
  //     .find(
  //         {date:
  //             {
  //                 $gte: new Date("2021-03-17T06:04:57.972+00:00"),
  //                 $lte: new Date("2021-04-17T06:04:57.972+00:00")
  //             }
  //         }
  //         ).populate("Object");
  //         console.log(def)

  // const def = await Defect.aggregate([
  //   {
  //     $match: {
  //       date:
  //             {
  //                 $gte: new Date("2021-04-05T06:04:57.972+00:00"),
  //                 $lte: new Date("2021-04-17T06:04:57.972+00:00")
  //             }
  //     },
  //     $group: {
  //       _id: "$objectId"
  //     }
  //   }
  // ]);


  const def = await Defect.aggregate([
    {$match: {
            date:
                  {
                      $gte: new Date("2021-04-05T06:04:57.972+00:00"),
                      $lte: new Date("2021-04-17T06:04:57.972+00:00")
                  }
          }},
    {$project: {_id: 0, objectId: 1, defects: {train: "$train", date: "$date", time: "$time" }}},
    {$group: {_id: "$objectId", defects: {$push: "$defects"}}}
])
  

  // const defects = await Object.aggregate([
  //     // {$unwind: JSON.stringify(def)},
  //     {
  //         $lookup: {
  //           from: JSON.stringify(def),
  //           localField: "_id",
  //           foreignField: "objectId",
  //           as: "d",
  //         },
  //       },
  // ])

  //const defects = await Defect.find({date: {$gte: "2021-03-17T06:04:57.972+00:00", $lte: "2021-05-17T06:04:57.972+00:00"}});

  //console.log("defects", defects);
  res.status(201).json(def);
};
