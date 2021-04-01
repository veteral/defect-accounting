const { getData, setData } = require("./fileController");
const config = require("config");

const path = config.get("pathDB");
const DB = path + "cause.json";

module.exports.getAllCause = (req, res) => {
    const data = getData(DB);
    res.json(data);
};

module.exports.setCause = (req, res) => {
    try {
        const data = getData(DB);
        data.push(req.body);
        setData(DB, data);
        res.status(201).json(data);
    } catch (e) {
        console.log(`При добавлении типа срабатывания произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.deleteCause = (req, res) => {
    try {
        const data = getData(DB);
        const { id } = req.params;

        const objects = data.filter((item) => id !== item.id);
        setData(DB, objects);
        res.status(200).json(objects);
    } catch (e) {
        console.log(
            `При удалении типа срабатывания id:${id} произошла ошибка - ${e}`
        );
        res.status(500);
    }
};
