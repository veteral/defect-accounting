const express = require("express");
const config = require("config");
const cors = require("cors");

const PORT = config.get("serverPort");

const app = express();
app.use(cors());
app.use(express.json()); //для парсинга json данных

app.get("/", (req, res) => {
    res.status(200).json({ message: "WORKING!!!" });
});

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
});
