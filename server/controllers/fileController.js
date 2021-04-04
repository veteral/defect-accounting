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

// асинхронный метод записи в файл
module.exports.setDataA = (nameFile, data) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(nameFile, JSON.stringify(data, null, 2), "utf8");
      console.log("reject")
      return resolve({ message: "File was created" });
    } catch (e) {
        console.log("Error write to file")
      return reject({ message: "File error" });
    }
  });
};

// асинхронный метод чтения данных из файла
module.exports.getDataA = (nameFile, data) => {
    return new Promise((resolve, reject) => {
      try {        
        return resolve(JSON.parse(fs.readFileSync(nameFile, "utf8")));
      } catch (e) {
        return reject({ message: "File error" });
      }
    });
  };
