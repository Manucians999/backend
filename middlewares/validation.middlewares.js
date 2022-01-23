const Size = require("../models/size.model");

const validationSizes = async (req, res, next) => {
  const { name } = req.body;
  const sizes = await Size.find();
  if (isNaN(name)) {
    res.render("admin/size/index", {
      message: "giá trị không đúng",
      sizes,
      title: "this is sizes page",
    });
    return;
  }
  next();
};

module.exports = { validationSizes };
