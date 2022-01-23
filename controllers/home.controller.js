const md5 = require("md5");

const Product = require("../models/product.model");
const User = require("../models/user.model");

module.exports = {
  index: async (req, res) => {
    const data = await Product.find();
    console.log(data);
    res.render("home/index", {
      data,
      session: req.signedCookies.ssid,
      title: "Home Page ",
    });
  },

  logout: (req, res) => {
    if (req.signedCookies.ssid) {
      if (req.signedCookies.ssaid) {
        res.clearCookie("ssaid");
      }
      res.clearCookie("ssid");
      res.redirect("/");
    }
  },
};
