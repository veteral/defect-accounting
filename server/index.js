const express = require("express");
const config = require("config");
const cors = require("cors");
const router = require("./routes/index");
const mongoose = require("mongoose");

const PORT = config.get("serverPort");
const DB = config.get("DB");

const app = express();
app.use(cors());
app.use(express.json()); //для парсинга json данных

app.use("/", router);

async function start() {
    try {
        await mongoose.connect(`mongodb://localhost:27017/${DB}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT}...`)
        );
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
}

start();
