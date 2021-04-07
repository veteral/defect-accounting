const Router = require("express");
const router = new Router();
const controller = require("../controllers/objectController");

router.post("/object", controller.addObject);
router.get("/", controller.getObjects);
// router.get("/", controller.getAllObjects);
// router.get("/objects", controller.getAllObjects);
// router.get("/objects/:id", controller.getOneObject);
// router.post("/objects", controller.setObject);
// router.delete("/:id", controller.deleteObject);
// router.post("/defect/:id", controller.addDefect);
// router.delete("/defect/:ido/:idw", controller.deleteDefect);

module.exports = router;
