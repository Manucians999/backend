const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  size: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Size",
    },
  ],
  price: Number,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
