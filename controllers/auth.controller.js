const User = require("../models/user.model");
const Role = require("../models/role.model");
const md5 = require("md5");

const register = async (req, res) => {
  res.render("auth/register", {
    title: "This is register page",
  });
};

const postRegister = async (req, res) => {
  const roleUser = await Role.findOne({ slug: "admin" });
  const email = await User.findOne({ email: req.body.email });

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
    res.render("auth/login");
  } else {
    if (req.signedCookies.ssaid) {
      res.clearCookie("ssaid");
    } else {
      res.clearCookie("ssid");
    }
    res.render("auth/login");
  }
};

const postLogin = async (req, res) => {
  const times = new Date(Date.now() + 60 * 60 * 1000);

  let objFind = {};
  const checkEmail = req.body.username.split("@")[1];
  if (checkEmail) {
    objFind = { email: req.body.username };
  } else {
    objFind = { username: req.body.username };
  }

  const user = await User.findOne(objFind).populate({
    path: "role",
    select: "_id name slug",
  });

  if (!user) {
    res.redirect("auth/login", {
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

  if (user.role.slug === "admin" || user.role.slug === "superadmin") {
    res.cookie("ssaid", user._id, {
      signed: true,
      expires: times,
      httponly: false,
    });
    res.redirect("/admin");
  } else {
    res.cookie("ssid", user._id, {
      signed: true,
      expires: times,
      httponly: false,
    });
    res.redirect("/");
  }
};

module.exports = { register, postRegister, login, postLogin };
