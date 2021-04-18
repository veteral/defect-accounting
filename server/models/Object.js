const { model, Schema, ObjectId } = require("mongoose");

const ObjectSchema = new Schema({
    // _id: { type: ObjectId, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    passwords: { type: String, required: true },
    telefone: { type: String },
    device: { type: String },
    control: { type: Boolean, default: false },
    defects: [{type: ObjectId, ref: "Defect"}]
});

module.exports = model("Object", ObjectSchema);
