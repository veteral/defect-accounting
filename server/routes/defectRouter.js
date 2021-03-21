const Router = require("express");
const router = new Router();
const controller = require("../controllers/wearController");

//router.get("/");
router.post("/:id", controller.addWear);
router.delete("/:ido/:idw");

module.exports = router;
