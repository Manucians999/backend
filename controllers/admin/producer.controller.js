const Producer = require("../../models/producer.model");
const slugify = require("slugify");

const getAllProducer = async (req, res) => {
  const producers = await Producer.find();
  res.render("admin/producer/index", {
    producers,
    title: "This is producer page",
  });
};

const createProducer = async (req, res) => {
  const newProducer = await Producer({
    name: req.body.name,
    slug: slugify(req.body.name.toLowerCase()),
  });
  await newProducer.save();
  res.redirect("/admin/producers");
};

const deleteProducer = async (req, res) => {
  await Producer.deleteOne({ _id: req.params.id });
  res.redirect("/admin/producers");
};

module.exports = { getAllProducer, createProducer, deleteProducer };
