module.exports = {
  authLogin: function (req, res, next) {
    if (!req.signedCookies.ssaid) {
      res.redirect('/auth/login');
      return;
    }
    next();
  },
};
