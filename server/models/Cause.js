const { model, Schema } = require("mongoose");

const Cause = new Schema({
    nameL: { type: String, required: true },
    nameS: { type: String, required: true },
    nameC: { type: String, required: true },
});

module.exports = model("Cause", Cause);
