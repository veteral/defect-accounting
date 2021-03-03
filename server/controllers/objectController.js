class ObjectController {
    getObject(req, res) {
        res.json({ message: "test api" });
    }
}

module.exports = new ObjectController();
