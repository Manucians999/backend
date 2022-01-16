const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  lastName: String,
  firstName: String,
  address: String,
  phone: String,
  email: String,
});

module.exports = mongoose.model("User", userSchema);
