const { getData, setData } = require("./fileController");
const config = require("config");

const path = config.get("pathDB");
const DB = path + "objects.json";

module.exports.addWear = (req, res) => {
    try {
        const { id } = req.params;

        const data = getData(DB);
        const object = data.filter((item) => id === item.id)[0];
        object.wear.push(req.body);

        setData(DB, data);
        res.status(201).json(data);
    } catch (e) {
        console.log(
            `При добавлении срабатывания, в объект с id - ${id}, произошла ошибка - ${e}`
        );
        res.status(500);
    }
};

module.exports.deleteWear = (req, res) => {
    try {
        // const data = getData(DB);
        // const { ido, idw } = req.params;
        // const objects = data.filter((item) => ido === item.id).filter;
        // const objects = data.filter((item) => ido !== item.id);
        // setData(DB, objects);
        // res.status(200).json(objects);
    } catch (e) {
        console.log(`При удалении объекта id:${id} произошла ошибка - ${e}`);
        res.status(500);
    }
};
