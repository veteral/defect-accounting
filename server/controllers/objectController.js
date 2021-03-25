const { getData, setData } = require("./fileController");
const config = require("config");
const { v4: uuidv4 } = require("uuid");

const path = config.get("pathDB");
const DBObjects = path + "objects.json";
const DBCause = path + "cause.json";

module.exports.getAllObjects = (req, res) => {
    const objects = getData(DBObjects);
    const cause = getData(DBCause);

    const data = objects.map((element) => {
        const defects = element.defects.map((defect) => {
            const nameCause = cause.find((i) => i.key === defect.key_cause);
            if (nameCause !== undefined) {
                return { ...defect, key_cause: nameCause.Name_L };
            }
            //const nameLong = nameCause;
            return { ...defect };
        });
        return { ...element, defects: [...defects] };
    });

    //console.log(data);
    res.json(data);
};

module.exports.getOneObject = (req, res) => {
    const data = getData(DB);
    const { id } = req.params;

    const object = data.filter((item) => id === item.id);
    res.status(200).json(object);
};

module.exports.setObject = (req, res) => {
    try {
        let object = { ...req.body, key: uuidv4(), defects: [] }; //уникальный id

        const objects = getData(DB);
        objects.push(object);

        setData(DBObjects, objects);
        res.status(201).json(objects);
    } catch (e) {
        console.log(`При добавлении объекта произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.deleteObject = (req, res) => {
    try {
        const data = getData(DB);
        const { id } = req.params;

        const objects = data.filter((item) => id !== item.id);
        setData(DBObjects, objects);
        res.status(200).json(objects);
    } catch (e) {
        console.log(`При удалении объекта id:${id} произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.addDefect = (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const objects = getData(DBObjects);
        const object = objects.find((item) => id === item.key);
        console.log(object);
        const addDefect = { ...req.body, key: uuidv4() };

        object.defects.push(addDefect);
        object.defects.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        console.log("object server", object);
        setData(DBObjects, objects);
        res.status(201).json(objects);
    } catch (e) {
        console.log(
            `При добавлении срабатывания, в объект с id - ${id}, произошла ошибка - ${e}`
        );
        res.status(500);
    }
};

module.exports.deleteDefect = (req, res) => {
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
