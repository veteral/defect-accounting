const { model, Schema, ObjectId } = require("mongoose");

const DubleSchema = new Schema({
    objectId: { type: ObjectId, ref: "Object" },
    train: { type: String, required: true },
    date: { type: Date, required: true },
    isNewRecord: { type: Boolean, default: true },
    isOldRecord: { type: Boolean, default: false },
    //time: { type: String, required: true },
    //causeId: { type: ObjectId, ref: "Cause" },
});

module.exports = model("Duble", DubleSchema);
