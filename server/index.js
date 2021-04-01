const express = require("express");
const config = require("config");
const cors = require("cors");
const router = require("./routes/index");

const PORT = config.get("serverPort");

const app = express();
app.use(cors());
app.use(express.json()); //для парсинга json данных
//app.use(express.static(__dirname + "/data"));

app.use("/", router);

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});
