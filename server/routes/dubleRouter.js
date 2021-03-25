const Router = require("express");
const router = new Router();
const controller = require("../controllers/dubleController");

router.get("/", controller.getDuble);
//router.post("/", controller.setCause);
router.delete("/:id", controller.deleteDuble);

module.exports = router;
