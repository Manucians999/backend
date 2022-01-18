const Color = require("../../models/color.model");
const slugify = require("slugify");

const getAllColor = async (req, res) => {
  const colors = await Color.find();
  res.render("admin/color/index", {
    colors,
    title: "This is color manage",
  });
};

const createColor = async (req, res) => {
  const newColor = new Color({
    name: req.body.name,
    slug: slugify(req.body.name.toLowerCase()),
    status: 1,
  });
  await newColor.save();
  res.redirect("/admin/colors");
};

const updateStatusColor = async (req, res) => {
  const color = await Color.find({_id: req.params.id});
  const newColor = { ...color[0]._doc, status: color[0].status === 1 ? 0 : 1 };
  await Color.updateOne({ _id: req.params.id }, newColor);
  res.redirect("/admin/colors");
};

const deleteColor = async (req, res) => {
  await Color.deleteOne({ _id: req.params.id });
  res.redirect("/admin/colors");
};

module.exports = { getAllColor, createColor, updateStatusColor, deleteColor };
