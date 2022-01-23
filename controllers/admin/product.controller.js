const slugify = require("slugify");
const path = require("path");

const Product = require("../../models/product.model");
const Color = require("../../models/color.model");
const Producer = require("../../models/producer.model");
const Size = require("../../models/size.model");

const getAllProduct = async (req, res) => {
  const products = await Product.find()
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
  res.render("admin/product/index", {
    products,
    title: "This is product page",
  });
};

const indexCreateProduct = async (req, res) => {
  const colors = await Color.find();
  const producers = await Producer.find();
  const sizes = await Size.find();
  res.render("admin/product/create", {
    colors: colors.filter((c) => c.status > 0),
    producers,
    sizes,
    title: "This is create product page",
  });
};

const createProduct = async (req, res) => {
  const image = req.files.image;
  await image.mv(
    path.resolve(__dirname, "../../public/uploads", image.name),
    async function (err) {
      if (err) console.log(err);
      const newProduct = new Product({
        name: req.body.name,
        slug: slugify(req.body.name.toLowerCase()),
        price: Number(req.body.price),
        size: req.body.size,
        producer: req.body.producer,
        color: req.body.color,
        images: `/uploads/${image.name}`,
        description: req.body.description,
      });
      await newProduct.save();
    }
  );
  res.redirect("/admin/products");
};

const indexUpdateProduct = async (req, res) => {
  const colors = await Color.find();
  const producers = await Producer.find();
  const sizes = await Size.find();
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
  res.render("admin/product/update", {
    product,
    colors,
    producers,
    sizes,
    title: "This update product page",
  });
};

const updateProduct = async (req, res) => {
  const image = req.files.image;
  await image.mv(
    path.resolve(__dirname, "../../public/uploads", image.name),
    async function (err) {
      if (err) console.log(err);

      const newProduct = {
        name: req.body.name,
        slug: slugify(req.body.name.toLowerCase()),
        price: Number(req.body.price),
        size: req.body.size,
        producer: req.body.producer,
        color: req.body.color,
        images: `/uploads/${image.name}`,
        description: req.body.description,
      };
      await Product.updateOne({ slug: req.params.slug }, newProduct);
    }
  );
  res.redirect("/admin/products");
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ slug: req.params.slug });
  res.redirect("/admin/products");
};

module.exports = {
  getAllProduct,
  indexCreateProduct,
  createProduct,
  indexUpdateProduct,
  updateProduct,
  deleteProduct,
};
