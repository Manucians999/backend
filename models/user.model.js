const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  fullName: String,
  address: String,
  phone: String,
  email: String,
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

module.exports = mongoose.model("User", userSchema);
