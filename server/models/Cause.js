const { model, Schema, ObjectId } = require("mongoose");

const CauseSchema = new Schema({
    //_id: { type: ObjectId, required: true },
    nameL: { type: String, required: true },
    nameS: { type: String, required: true },
    nameC: { type: String, required: true },
});

module.exports = model("Cause", CauseSchema);
