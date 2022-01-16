const Size = require("../../models/size.model");

const getAllSize = async (req, res) => {
  const sizes = await Size.find();
  res.render("admin/size/index", {
    sizes,
    title: "This is size page",
  });
};

module.exports = { getAllSize };
