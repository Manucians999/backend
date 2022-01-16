const Product = require("../../models/product.model");
const slugify = require("slugify");

const getAllProduct = async (req, res) => {
  const products = await Product.find();
  res.render("admin/product/index", {
    products,
    title: "This is product page",
  });
};

const indexCreateProduct = async (req, res) => {
  res.render("admin/product/create", {
    title: "This is create product page",
  });
};

const createProduct = async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    slug: slugify(req.body.name.toLowerCase()),
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.redirect("/admin/products");
};

module.exports = {
  getAllProduct,
  indexCreateProduct,
  createProduct,
  deleteProduct,
};
