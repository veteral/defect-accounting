const Router = require("express");
const router = new Router();
const objectRouter = require("./objectRouter");

router.use("/", objectRouter);

module.exports = router;
