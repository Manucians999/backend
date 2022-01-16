const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  size: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Size",
    },
  ],
  producer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producer",
  },
  price: Number,
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Product", productSchema);
