const mongoose = require("mongoose");

const sizeSchema = mongoose.Schema({
  name: String,
  slug: String,
  
});

module.exports = mongoose.model("Size", sizeSchema);
