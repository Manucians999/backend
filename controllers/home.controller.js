const md5 = require('md5');

const Product = require('../models/products.model');
const News = require('../models/news.model');
const Auths = require('../models/auth.model');

module.exports = {
  index: async (req, res) => {
    res.render('home/index', {
      data: await Product.getAll(),
      session: req.signedCookies.ssid,
      user: await Auths.find({id: req.signedCookies.ssid}),
      title: 'Home Page - Website about the House'
    })
  },

  about: (req, res) => {
    res.render('home/about', {
      title: 'About Page - Website about the House'
    });
  },

  logout: (req, res) => {
    if(req.signedCookies.ssid) {
      if(req.signedCookies.ssaid) {
        res.clearCookie('ssaid');
      }
      res.clearCookie('ssid');
      res.redirect('/');
    }
  },

  register: (req, res) => {
    res.render('home/register', {
      title: 'Register Page - Website about the House'
    });
  },
  postRegister: (req, res) => {
    Auths.create(
      {
        username: req.body.username,
        fullname: req.body.fullname,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        password: md5(req.body.password)
      }
    ).then(() =>{
      res.redirect('/auth/login');
    }).catch((err) => {
      console.log(err);
    })
  },

  news: async (req, res) => {
    const product = await News.getAll();
    res.render('news/list', {
      news: product,
      title: 'News Page - Website about the House'
    })
  }
}