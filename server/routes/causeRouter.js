const Router = require("express");
const router = new Router();
const controller = require("../controllers/causeController");

router.get("/", controller.getAllCause);
router.post("/", controller.setCause);
router.delete("/:id", controller.deleteCause);

module.exports = router;
