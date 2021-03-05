const { getData, setData } = require("./fileController");
const config = require("config");

const path = config.get("pathDB");
const DB = path + "objects.json";

module.exports.getAllWears = (req, res) => {
    const data = getData(DB);
    res.json(data);
};

module.exports.setWear = (req, res) => {
    try {
        const data = getData(DB);
        data.push(req.body);
        setData(DB, data);
        res.status(201).json(data);
    } catch (e) {
        console.log(`При добавлении объекта произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.deleteWear = (req, res) => {
    try {
        const data = getData(DB);
        const { id } = req.params;

        const objects = data.filter((item) => id !== item.id);
        setData(DB, objects);
        res.status(200).json(objects);
    } catch (e) {
        console.log(`При удалении объекта id:${id} произошла ошибка - ${e}`);
        res.status(500);
    }
};
