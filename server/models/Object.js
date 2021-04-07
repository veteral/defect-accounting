const { model, Schema, ObjectId } = require("mongoose");

const ObjectSchema = new Schema({
    _id: { type: ObjectId, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    passwords: { type: String, required: true },
    telefone: { type: String, default: "" },
    device: { type: String, default: "" },
    control: { type: Boolean, default: false },
});

module.exports = model("Object", ObjectSchema);
