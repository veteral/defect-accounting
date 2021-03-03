const Router = require("express");
const router = new Router();
const objectController = require("../controllers/objectController");

router.use("/", objectController.getObject);

module.exports = router;
