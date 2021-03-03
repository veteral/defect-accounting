const fs = require("fs");

/**
 * возвращает результат чтения файла
 * name - наименование файла
 */
module.exports.getData = (nameFile) => {
    try {
        return JSON.parse(fs.readFileSync(nameFile, "utf8"));
    } catch (e) {
        console.log(`Не найден файл ${nameFile}`);
    }
};

/**
 * записывает данные в файл
 * name - имя файла
 * data - записываемые данные
 */
module.exports.setData = (nameFile, data) => {
    try {
        fs.writeFileSync(nameFile, JSON.stringify(data, null, 2), "utf8");
    } catch (e) {
        console.log(`Ошибка записи в файл ${nameFile}`);
    }
};
