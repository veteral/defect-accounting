const Router = require("express");
const router = new Router();
const objectRouter = require("./objectRouter");
const causeRouter = require("./causeRouter");
const reportsRouter = require("./reportsRouter");

//router.use("/", dubleRouter);
router.use("/", objectRouter);
router.use("/causes", causeRouter);
router.use("/reports", reportsRouter);

module.exports = router;
