class ObjectController {
    getAllObjects(req, res) {
        res.json({ message: "test api" });
    }

    getObject(req, res) {}

    setObject(req, res) {}

    deleteObject(req, res) {}
}

module.exports = new ObjectController();
