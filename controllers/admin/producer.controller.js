const Producer = require("../../models/producer.model");

const getAllProducer = async (req, res) => {
  const producer = await Producer.find();
  res.redirect("admin/producer/index", {
    producer,
    title: "This is producer page",
  });
};

const createProducer = async (req, res) => {
  const newProducer = await Producer({
    name: req.body.name,
    slug: req.body.name,
  });
  await newProducer.save();
  res.redirect("/admin/producer");
};

const deleteProducer = async (req, res) => {
  await Producer.deleteOne({ _id: req.params.id });
  res.redirect("/admin/producer");
};

module.exports = { getAllProducer, createProducer, deleteProducer };
