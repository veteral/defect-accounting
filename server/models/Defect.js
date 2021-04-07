const { model, Schema, ObjectId } = require("mongoose");

const DefectSchema = new Schema({
    _id: { type: ObjectId, required: true },
    objectId: { type: ObjectId, ref: "Object" },
    train: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    causeId: { type: ObjectId, ref: "Cause" },
});

module.exports = model("Defect", DefectSchema);
