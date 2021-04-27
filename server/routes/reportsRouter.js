const Router = require("express");
const router = new Router();
const controller = require("../controllers/reportsController");

router.get("/log/:start/:end", controller.getLog);
router.get("/analysis/:start/:end/:period", controller.getAnalysis);
//router.post("/add", controller.addObject);
//router.get("/test/:start/:end/:period", controller.getTest);
//router.post("/defects/add", controller.addDefect);
//router.get("/defects", controller.getDefects);
// router.delete("/:id", controller.deleteObject);
// router.post("/defect/:id", controller.addDefect);
// router.delete("/defect/:ido/:idw", controller.deleteDefect);

module.exports = router;
