const express = require("express");
const config = require("config");
const cors = require("cors");
const router = require("./routes/index");
const mongoose = require("mongoose");

const PORT = config.get("serverPort");
const URL_API = config.get("URL_API");

const app = express();
app.use(cors());
app.use(express.json()); //для парсинга json данных
//app.use(express.static(__dirname + "/data"));

//app.use("/", router);

// app.listen(PORT, () => {
//     console.log("Server started on port", PORT);
// });

const start = async () => {
    try {
        await mongoose.connect(URL_API, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

