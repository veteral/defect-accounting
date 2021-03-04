const Router = require("express");
const router = new Router();
//const objectController = require("../controllers/objectController");
const controller = require("../controllers/objectController");

//router.get("/", controller.getAllObjects);
router.get("/", controller.getAllObjects);
router.get("/:id", controller.getOneObject);
router.post("/", controller.setObject);
router.delete("/:id", controller.deleteObject);

module.exports = router;
