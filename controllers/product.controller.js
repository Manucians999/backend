const Product = require("../models/product.model");
const Producer = require("../models/producer.model");

const getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug })
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
};

const indexProduct = async (req, res) => {
  const products = await Product.find();
  const producers = await Producer.find();
  res.render("product/index", {
    products,
    producers,
    title: "Products Page",
  });
};
const loadProducts = async (req, res) => {
  const producers = await Producer.find();
  const idProducer = producers.find((item) => item.slug === req.params.slug);
  const findObj = idProducer ? { producer: idProducer.id } : {};
  const product = await Product.find(findObj)
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
  res.render("product/load", {
    data: product,
    producers,
    title: "Products Page",
  });
};

const search = async (req, res) => {
  const producers = await Producer.find();
  const product = await Product.find()
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
  res.render("product/search", {
    data: product,
    producers,
    title: "Search Page",
  });
};

module.exports = { getProductBySlug, indexProduct, loadProducts, search };
