const User = require("../models/user.model");
const Role = require("../models/role.model");
const md5 = require("md5");
const { validationResult } = require("express-validator");

const register = async (req, res) => {
  res.render("auth/register", {
    title: "This is register page",
  });
};

const postRegister = async (req, res) => {
  const roleUser = await Role.findOne({ slug: "user" });
  const email = await User.findOne({ email: req.body.email });
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    console.log("errors.array()[0].msg", errors.array()[0].msg);
    res.render("auth/register", {
      title: "This is register page",
      message: errors.array()[0].msg,
      values: req.body,
    });
    return;
  }

  if (email) {
    res.render("auth/register", {
      title: "This is register page",
      message: "Email đã tồn tại",
      values: req.body,
    });
    return;
  }

  const user = new User({
    fullName: req.body.fullName,
    username: req.body.email.split("@")[0],
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email,
    password: md5(req.body.password),
    role: roleUser._id,
  });
  await user.save();

  res.redirect("/auth/login");
};

const login = async (req, res) => {
  if (!req.signedCookies.ssid || !req.signedCookies.ssaid) {
    res.clearCookie("ssaid");
    res.clearCookie("ssid");
    res.render("auth/login");
  }
};

const postLogin = async (req, res) => {
  let objFind = {};
  const errors = validationResult(req);
  const checkEmail = req.body.username.split("@")[1];
  if (checkEmail) {
    objFind = { email: req.body.username };
  } else {
    objFind = { username: req.body.username };
  }

  if (errors.array().length > 0) {
    res.render("auth/login", {
      title: "This is login page",
      message: errors.array()[0].msg,
      values: req.body,
    });
    return;
  }

  const user = await User.findOne(objFind).populate({
    path: "role",
    select: "_id name slug",
  });

  if (!user) {
    res.render("auth/login", {
      title: "This is login page",
      message: objFind.username
        ? "Username không tồn tại"
        : "Email không tồn tại",
      values: req.body,
    });
    return;
  }

  if (user.password !== md5(req.body.password)) {
    res.render("auth/login", {
      title: "This is login page",
      message: "Mật khẩu không đúng",
      values: req.body,
    });
    return;
  }

  if (user.role.slug === "admin") {
    res.cookie("ssaid", user._id, {
      signed: true,
      expiresIn: "120ms",
      httponly: false,
    });
    res.redirect("/admin");
  } else {
    res.cookie("ssid", user._id, {
      signed: true,
      expiresIn: "120ms",
      httponly: false,
    });
    res.redirect("/");
  }
};

module.exports = { register, postRegister, login, postLogin };
