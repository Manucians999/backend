const Size = require("../../models/size.model");

const getAllSize = async (req, res) => {
  const sizes = await Size.find();
  res.render("admin/size/index", {
    sizes,
    title: "This is size page",
  });
};

const createSize = async (req, res) => {
  const newProduct = new Size({
    name: req.body.name,
    slug: `size-${req.body.name}`,
  });
  await newProduct.save();
  res.redirect("/admin/sizes");
};

const deleteSize = async (req, res) => {
  await Size.deleteOne({ _id: req.params.id });
  res.redirect("/admin/sizes");
};

module.exports = { getAllSize, createSize, deleteSize };
