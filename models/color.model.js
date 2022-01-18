const mongoose = require("mongoose");

const colorSchema = mongoose.Schema({
  name: String,
  slug: String,
  code: String,
  status: Number,
});

module.exports = mongoose.model("Color", colorSchema);
