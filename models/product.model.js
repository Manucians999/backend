const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  slug: String,
  size: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Size",
    },
  ],
  color: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color",
    },
  ],
  producer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Producer",
  },
  price: Number,
  images: [
    {
      url: {
        type: String,
      },
    },
  ],
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
