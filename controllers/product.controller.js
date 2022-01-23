const Product = require("../models/product.model");

module.exports = {
  get_product_by_slug: async (req, res) => {
    const product = await Product.findOne({slug: req.params.slug})
      .populate({
        path: "size",
        select: "_id name",
      })
      .populate({
        path: "producer",
        select: "_id name",
      })
      .populate({
        path: "color",
        select: "_id name",
      });
    res.render("product/detail", {
      product,
      title: "Product Page ",
    });
  },

  index: async (req, res) => {
    const product = await Product.find();
    res.render("product/index", {
      data: product,
      title: "Products Page",
    });
  },

  loadProducts: async (req, res) => {
    const product = await Product.find();
    res.render("product/load", {
      data: product,
      title: "Products Page",
    });
  },
};
