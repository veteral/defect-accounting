const Router = require("express");
const router = new Router();
const controller = require("../controllers/objectController");

router.get("/objects", controller.getAllObjects);
router.post("/objects/add", controller.addObject);
router.put("/objects/edit/:id", controller.editObject);
router.delete("/objects/delete/:id", controller.deleteObject);

router.get("/", controller.getControl);
router.post("/defects/add", controller.addDefect);
router.get("/defects", controller.getDefectsIdObject);
// router.delete("/:id", controller.deleteObject);
// router.post("/defects/:id", controller.addDefect);
router.delete("/defects/:id", controller.deleteDefect);

module.exports = router;
