const config = require("config");
const moment = require("moment");
const { getData, setData, setDataA } = require("./fileController");
const { v4: uuidv4 } = require("uuid");
const Object = require("../models/Object");
const Defect = require("../models/Defect");
const mongoose = require("mongoose");

const path = config.get("pathDB");
const DBObjects = path + "objects.json";
const DBCause = path + "cause.json";

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
    //const { id } = req.params;
    try {
        console.log(req.body);

        let addDefect = new Defect({ ...req.body });

        await addDefect.save();
        //console.log(id);
        // const objects = getData(DBObjects);

        // const object = objects.find((item) => id === item.key);

        // //console.log("object", object);

        // const addDefect = { ...req.body, key: uuidv4() };

        // // выявляем повтор срабатывания:
        // // срабатывание одного шлейфа 3 раза и более за 30 дней
        // const defectsIn30days = object.defects
        //     .filter((i) => i.train === addDefect.train)
        //     .filter((i) => {
        //         const days = moment(addDefect.date, "DD-MM-YYYY").diff(
        //             moment(i.date, "DD-MM-YYYY"),
        //             "days"
        //         );
        //         if (days >= 0 && days < 30) return i;
        //     });

        // //console.log("defectsIn30days", defectsIn30days);
        // if (defectsIn30days.length >= 2) object.duble = true;

        // object.defects.push(addDefect);

        // // сортируем срабатывания по дате
        // object.defects.sort(
        //     (a, b) =>
        //         moment(a.date, "DD.MM.YYYY") - moment(b.date, "DD.MM.YYYY")
        // );

        // await setDataA(DBObjects, objects);

        // const data = getObjectsWithCause(objects);
        console.log("send json");

        res.status(201).json(addDefect);
    } catch (e) {
        console.log(
            `При добавлении срабатывания, в объект с id - ${id}, произошла ошибка - ${e}`
        );
        res.status(500);
    }
};

// // module.exports.getOneObject = (req, res) => {
// //     const data = getData(DB);
// //     const { id } = req.params;

// //     const object = data.filter((item) => id === item.id);
// //     res.status(200).json(object);
// // };

// // module.exports.setObject = (req, res) => {
// //     try {
// //         let object = { ...req.body, key: uuidv4(), defects: [], duble: false }; //уникальный id

// //         const objects = getData(DBObjects);
// //         objects.push(object);

// //         objects.sort(function (a, b) {
// //             if (a.passwords > b.passwords) {
// //                 return 1;
// //             }
// //             if (a.passwords < b.passwords) {
// //                 return -1;
// //             }
// //             // a должно быть равным b
// //             return 0;
// //         });

// //         setData(DBObjects, objects);
// //         res.status(201).json(objects);
// //     } catch (e) {
// //         console.log(`При добавлении объекта произошла ошибка - ${e}`);
// //         res.status(500);
// //     }
// // };

// // module.exports.deleteObject = (req, res) => {
// //     try {
// //         const data = getData(DBObjects);
// //         const { id } = req.params;

// //         const objects = data.filter((item) => id !== item.id);
// //         setData(DBObjects, objects);

// //         res.status(200).json(objects);
// //     } catch (e) {
// //         console.log(`При удалении объекта id:${id} произошла ошибка - ${e}`);
// //         res.status(500);
// //     }
// // };

// // module.exports.addDefect = async (req, res) => {
// //     const { id } = req.params;
// //     try {
// //         //console.log(id);
// //         const objects = getData(DBObjects);

// //         const object = objects.find((item) => id === item.key);

// //         //console.log("object", object);

// //         const addDefect = { ...req.body, key: uuidv4() };

// //         // выявляем повтор срабатывания:
// //         // срабатывание одного шлейфа 3 раза и более за 30 дней
// //         const defectsIn30days = object.defects
// //             .filter((i) => i.train === addDefect.train)
// //             .filter((i) => {
// //                 const days = moment(addDefect.date, "DD-MM-YYYY").diff(
// //                     moment(i.date, "DD-MM-YYYY"),
// //                     "days"
// //                 );
// //                 if (days >= 0 && days < 30) return i;
// //             });

// //         //console.log("defectsIn30days", defectsIn30days);
// //         if (defectsIn30days.length >= 2) object.duble = true;

// //         object.defects.push(addDefect);

// //         // сортируем срабатывания по дате
// //         object.defects.sort(
// //             (a, b) =>
// //                 moment(a.date, "DD.MM.YYYY") - moment(b.date, "DD.MM.YYYY")
// //         );

// //         await setDataA(DBObjects, objects);

// //         const data = getObjectsWithCause(objects);
// //         console.log("send json");

// //         res.status(201).json(data);
// //     } catch (e) {
// //         console.log(
// //             `При добавлении срабатывания, в объект с id - ${id}, произошла ошибка - ${e}`
// //         );
// //         res.status(500);
// //     }
// // };

// // module.exports.deleteDefect = (req, res) => {
// //     try {
// //         // const data = getData(DB);
// //         // const { ido, idw } = req.params;
// //         // const objects = data.filter((item) => ido === item.id).filter;
// //         // const objects = data.filter((item) => ido !== item.id);
// //         // setData(DB, objects);
// //         // res.status(200).json(objects);
// //     } catch (e) {
// //         console.log(`При удалении объекта id:${id} произошла ошибка - ${e}`);
// //         res.status(500);
// //     }
// // };

// // function getObjectsWithCause(objects) {
// //     const cause = getData(DBCause);

// //     const data = objects.map((element) => {
// //         const defects = element.defects.map((defect) => {
// //             const nameCause = cause.find((i) => i.key === defect.cause);
// //             if (nameCause !== undefined) {
// //                 return { ...defect, cause: nameCause.Name_L };
// //             }
// //             return { ...defect };
// //         });
// //         return { ...element, defects: [...defects] };
// //     });

//     return data;
// }

//let object = { ...req.body, key: uuidv4(), defects: [], duble: false }; //уникальный id

// let object = new Object({
//     name: "Test5",
//     address: "Address",
//     passwords: "1-1-1-2",

//     defects: [
//         {
//             _id: new mongoose.Types.ObjectId(),
//             train: "9",
//             date: "22-01-2021",
//             time: "05:05:05",
//             cause: "606b1b4c635f9f0408ea99dc",
//         },
//     ],
// });

// await object.save();
//files = await Defect.find({_id: "606da17a6185fc0d58ad8553"}).sort({name:1})
// Defect.findOne({ _id: "606da17a6185fc0d58ad8553" })
//     .populate("Object")
//     .exec(function (err, story) {
//         if (err) return console.log(err);
//         console.log("The author is %s", story.Object);
//         // prints "The author is Ian Fleming"
//     });

// const data = await Object.aggregate([
//     // { $limit: 100 },
//     {
//         $lookup: {
//             from: "defects",
//             //localField: "_id",
//             //foreignField: "objectId",
//             as: "defects",
//             pipeline: [{ $limit: 1 }],
//         },
//     },
// ]);

//const objects = await Object.find({});
//const defect = await Defect.find({});

// for (let i = 0; i < 10; ++i) {
//     const orders = await Object.aggregate([
//         { $match: { completed: true } },
//         {
//             $lookup: {
//                 from: "defects",
//                 localField: "_id",
//                 foreignField: "objectId",
//                 as: "defects",
//             },
//         },
//     ]);
//const orders = await Defect.find({}).populate("objects");
//times.push(Date.now() - startTime);
//}
