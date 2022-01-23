const Product = require("../models/product.model");

const indexHome = async (req, res) => {
  const data = await Product.find();
  res.render("home/index", {
    data,
    session: req.signedCookies.ssid,
    title: "Home Page ",
  });
};

const logout = (req, res) => {
  if (req.signedCookies.ssid) {
    if (req.signedCookies.ssaid) {
      res.clearCookie("ssaid");
    }
    res.clearCookie("ssid");
    res.redirect("/");
  }
};

module.exports = { indexHome, logout };
