const { getData, setData } = require("./fileController");
const Cause = require("../models/Cause");
const config = require("config");

module.exports.getCauses = async (req, res) => {
    try {
        const causes = await Cause.find({});
        res.json(causes);
    } catch (e) {
        res.status(500).json({
            message: "Что-то пошло не так, попробуйте снова",
        });
    }
};

// module.exports.setCause = (req, res) => {
//     try {
//         const data = getData(DB);
//         data.push(req.body);
//         setData(DB, data);
//         res.status(201).json(data);
//     } catch (e) {
//         console.log(`При добавлении типа срабатывания произошла ошибка - ${e}`);
//         res.status(500);
//     }
// };

// module.exports.deleteCause = (req, res) => {
//     try {
//         const data = getData(DB);
//         const { id } = req.params;

//         const objects = data.filter((item) => id !== item.id);
//         setData(DB, objects);
//         res.status(200).json(objects);
//     } catch (e) {
//         console.log(
//             `При удалении типа срабатывания id:${id} произошла ошибка - ${e}`
//         );
//         res.status(500);
//     }
// };
