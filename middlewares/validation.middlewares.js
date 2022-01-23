const { check, validationResult } = require("express-validator");
const Size = require("../models/size.model");

exports.validationSizes = async (req, res, next) => {
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

exports.validatorRegister = [
  check("email").isEmail().withMessage("Không phải email"),
  check("fullName").notEmpty().withMessage("Họ tên không được được để trống"),
  check("phone").notEmpty().withMessage("Sdt được được để trống"),
  check("address").notEmpty().withMessage("Địa chỉ được được để trống"),
  check("password")
    .isLength({ min: 4 })
    .withMessage("Mật khẩu ít nhất 4 kí tự"),
];

exports.validatorLogin = [
  check("password")
    .isLength({ min: 4 })
    .withMessage("Mật khẩu ít nhất 4 kí tự"),
];
