const Router = require("express");
const router = new Router();
const objectRouter = require("./objectRouter");
const causeRouter = require("./causeRouter");

//router.use("/", dubleRouter);
router.use("/", objectRouter);
router.use("/cause", causeRouter);

module.exports = router;
