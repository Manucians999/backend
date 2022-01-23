const authenticate = (req, res, next) => {
  if (!req.signedCookies.ssaid) {
    res.redirect("/auth/login");
    return;
  }
  next();
};

module.exports = { authenticate };
