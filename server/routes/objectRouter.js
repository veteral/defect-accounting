const Router = require("express");
const router = new Router();
const controller = require("../controllers/objectController");

router.get("/objects", controller.getAllObjects);
router.post("/add", controller.addObject);
router.get("/", controller.getControl);
router.post("/defect/:id", controller.addDefect);
// router.get("/objects/:id", controller.getOneObject);
// router.delete("/:id", controller.deleteObject);
// router.post("/defect/:id", controller.addDefect);
// router.delete("/defect/:ido/:idw", controller.deleteDefect);

module.exports = router;
