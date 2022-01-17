const authenticate = function (req, res, next) {
  console.log("req.signedCookies.ssaid", req.signedCookies.ssaid)
  if (!req.signedCookies.ssaid) {
    res.redirect("/auth/login");
    return;
  }
  next();
};

module.exports = { authenticate };
