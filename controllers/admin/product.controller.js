const slugify = require("slugify");

const Product = require("../../models/product.model");
const Color = require("../../models/color.model");
const Producer = require("../../models/producer.model");
const Size = require("../../models/size.model");

const getAllProduct = async (req, res) => {
  const products = await Product.find();
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
    colors,
    producers,
    sizes,
    title: "This is create product page",
  });
};

const createProduct = async (req, res) => {
  console.log("req", req.body);
  let image = req.files.image;

  let urlImage = 

  await image.mv(
    path.resolve(__dirname, "../public/image", image.name),
    function (err) {
      if (err) console.log(err);
      Product.create_product({ ...req.body, image: "/image/" + image.name });
      res.redirect("/admin/views");
    }
  );
  const newProduct = new Product({
    name: req.body.name,
    slug: slugify(req.body.name.toLowerCase()),
  });
  res.redirect("/admin/products/create");
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
