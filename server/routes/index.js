const Router = require("express");
const router = new Router();
const objectRouter = require("./objectRouter");
const dubleRouter = require("./dubleRouter");
const causeRouter = require("./causeRouter");

router.use("/", dubleRouter);
router.use("/objects", objectRouter);
router.use("/cause", causeRouter);

module.exports = router;
