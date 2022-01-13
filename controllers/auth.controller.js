const md5 = require('md5');
const Auths = require('../models/auth.model');

module.exports = {
  login: async (req, res) => {
    if (!req.signedCookies.ssid) {
      res.render('auth/login');
    } else {
      res.clearCookie('ssid');
      res.render('auth/login');
    }
  },
  postLogin: async (req, res) => {
    const times = new Date(Date.now() + 60 * 60 * 1000);
    Auths.find({ username: req.body.username })
      .then((user) => {
        if (user.length > 0) {
          if (user[0].username === 'admin') {
            if (user[0].password === md5(req.body.password)) {
              res.cookie('ssaid', user[0]._id, {
                signed: true,
                expires: times,
                httponly: false,
              });
              res.redirect('/admin');
            }
          }
          if (user[0].password === md5(req.body.password)) {
            res.cookie('ssid', user[0]._id, {
              signed: true,
              expires: times,
              httponly: false,
            });
            res.redirect('/');
          }
        }
        res.redirect('/auth/login');
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
