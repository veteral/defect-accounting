const config = require("config");
const moment = require("moment");
const { getData, setData } = require("./fileController");
const { v4: uuidv4 } = require("uuid");

const path = config.get("pathDB");
const DBObjects = path + "objects.json";
const DBCause = path + "cause.json";

module.exports.getAllObjects = (req, res) => {
    const objects = getData(DBObjects);
    const data = getObjectsWithCause(objects);
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
        let object = { ...req.body, key: uuidv4(), defects: [], duble: false }; //уникальный id

        const objects = getData(DBObjects);
        objects.push(object);

        objects.sort(function (a, b) {
            if (a.passwords > b.passwords) {
                return 1;
            }
            if (a.passwords < b.passwords) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        setData(DBObjects, objects);
        res.status(201).json(objects);
    } catch (e) {
        console.log(`При добавлении объекта произошла ошибка - ${e}`);
        res.status(500);
    }
};

module.exports.deleteObject = (req, res) => {
    try {
        const data = getData(DBObjects);
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
    const { id } = req.params;
    try {
        //console.log(id);
        const objects = getData(DBObjects);

        const object = objects.find((item) => id === item.key);

        const addDefect = { ...req.body, key: uuidv4() };

        // выявляем повтор срабатывания:
        // срабатывание одного шлейфа 3 раза и более за 30 дней
        const defectsIn30days = object.defects
            .filter((i) => i.train === addDefect.train)
            .filter((i) => {
                const days = moment(addDefect.date, "DD-MM-YYYY").diff(
                    moment(i.date, "DD-MM-YYYY"),
                    "days"
                );
                if (days >= 0 && days < 30) return i;
            });

        //console.log("defectsIn30days", defectsIn30days);
        if (defectsIn30days.length >= 2) object.duble = true;

        object.defects.push(addDefect);

        // сортируем срабатывания по дате
        object.defects.sort(
            (a, b) =>
                moment(a.date, "DD.MM.YYYY") - moment(b.date, "DD.MM.YYYY")
        );

        setData(DBObjects, objects);

        const data = getObjectsWithCause(objects);

        res.status(201).json(data);
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

function getObjectsWithCause(objects) {
    const cause = getData(DBCause);

    const data = objects.map((element) => {
        const defects = element.defects.map((defect) => {
            const nameCause = cause.find((i) => i.key === defect.cause);
            if (nameCause !== undefined) {
                return { ...defect, cause: nameCause.Name_L };
            }
            return { ...defect };
        });
        return { ...element, defects: [...defects] };
    });

    return data;
}
