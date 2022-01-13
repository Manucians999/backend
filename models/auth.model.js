const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
  username: String,
  password: String,
  fullname: String,
  address: String,
  phone: String,
  email: String,
});

authSchema.statics.getAll = function (id) {
  return this.find(id);
};

authSchema.statics.delete = function (id) {
  return this.deleteOne({ _id: id });
};

module.exports = mongoose.model('Auths', authSchema);
