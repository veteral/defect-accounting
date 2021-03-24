const Router = require("express");
const router = new Router();
const objectRouter = require("./objectRouter");
//const defectRouter = require("./defectRouter");
const causeRouter = require("./causeRouter");

router.use("/objects", objectRouter);
//router.use("/defects", wearRouter);
router.use("/cause", causeRouter);

module.exports = router;
