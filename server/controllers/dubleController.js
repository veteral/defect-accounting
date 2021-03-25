const { getData, setData } = require("./fileController");
const config = require("config");

const path = config.get("pathDB");
const DB = path + "objects.json";

module.exports.getDuble = (req, res) => {
    const objects = getData(DB);
    const duble = objects.filter((el) => el.duble === true);

    res.json(duble);
};

module.exports.deleteDuble = (req, res) => {
    try {
        // const data = getData(DB);
        // const { id } = req.params;
        // const objects = data.filter((item) => id !== item.id);
        // setData(DB, objects);
        // res.status(200).json(objects);
    } catch (e) {
        console.log(
            `При удалении типа срабатывания id:${id} произошла ошибка - ${e}`
        );
        res.status(500);
    }
};
