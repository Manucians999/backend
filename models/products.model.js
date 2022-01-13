const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  type: String,
  name: String,
  area: Number,
  furniture: String,
  information: String,
  price: Number,
  address: String,
  image: String,
});

productSchema.statics.getAll = function () {
  return this.find();
};

productSchema.statics.get_product = function (id) {
  return this.findById({ _id: id });
};

productSchema.statics.create_product = function (params) {
  return this.create(params);
};

productSchema.statics.delete = function (id) {
  return this.deleteOne({ _id: id });
};

productSchema.statics.update_product = function (id, body) {
  return this.updateOne({ _id: id }, { $set: body }).exec();
};


module.exports = mongoose.model('Product', productSchema);
