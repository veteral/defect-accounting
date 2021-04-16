const Router = require("express");
const router = new Router();
const controller = require("../controllers/reportsController");

router.get("/", controller.getAllDefects);
//router.post("/add", controller.addObject);
//router.get("/", controller.getControl);
//router.post("/defects/add", controller.addDefect);
//router.get("/defects", controller.getDefects);
// router.delete("/:id", controller.deleteObject);
// router.post("/defect/:id", controller.addDefect);
// router.delete("/defect/:ido/:idw", controller.deleteDefect);

module.exports = router;
