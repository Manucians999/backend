const mongoose = require("mongoose");

const producerSchema = mongoose.Schema({
  name: String,
  slug: String,
});

module.exports = mongoose.model("Producer", producerSchema);
