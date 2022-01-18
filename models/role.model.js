const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  name: String,
  slug: String,
});

module.exports = mongoose.model("Role", roleSchema);
