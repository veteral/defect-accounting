const Router = require("express");
const router = new Router();
const objectRouter = require("./objectRouter");
//const wearRouter = require("./wearRouter");
const causeRouter = require("./causeRouter");

router.use("/objects", objectRouter);
//router.use("/wear", wearRouter);
router.use("/cause", causeRouter);

module.exports = router;
