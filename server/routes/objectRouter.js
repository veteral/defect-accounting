const Router = require("express");
const router = new Router();
const objectController = require("../controllers/objectController");

router.get("/", objectController.getAllObjects);
router.get("/:id", objectController.getObject);
router.post("/", objectController.setObject);
router.delete("/:id", objectController.deleteObject);

module.exports = router;
