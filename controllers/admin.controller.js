const Product = require('../models/products.model');
const Types = require('../models/types.model');
const News = require('../models/news.model');
const Auths = require('../models/auth.model');
const path = require('path');

module.exports = {
  index: async (req, res) => {
    //   const product = await Product.getAll();
    res.render('admin/index');
  },

  product: async (req, res) => {
    res.render('admin/index');
  },

  create: async (req, res) => {
    res.render('admin/addproducts', {
      title: "Add Product Page"
    });
  },

  createProducts: async (req, res) => {
    res.render('admin/createproducts', {
      title: " Create Products Page",
      types: await Types.getAll()
    });
  },
  
  createTypes: async (req, res) => {
    res.render('admin/createtypes', {
      title: " Create Types Page",
      types: await Product.getAll()
    });
  },

  createKinds: async (req, res) => {
    res.render('admin/createkinds', {
      title: " Create Kinds Page",
      kinds: await Product.getAll()
    });
  },

  // postCreateImage: async (req, res) => {
  //   await Product.create_product(req.body);
  //   res.redirect('/admin/views');
  // },

  viewsProduct: async (req, res) => {
    const product = await Product.getAll();
    res.render('admin/viewproducts', {
      seeds: product,
      title: 'View Manage Page',
    });
  },

  viewNews: async (req, res) => {
    const product = await News.getAll();
    res.render('admin/viewnews', {
      news: product,
      title: 'View New Page'
    });
  },

  addNews: async (req, res) => {
    res.render('admin/addnews', {
      types: await News.getAll(),
      title: 'Add News Page'
    })
  },

  deleteProduct: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/views');
  },

  deleteTypes: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/create');
  },

  deleteKinds: async (req, res) => {
    await Product.delete(req.params.id);
    res.redirect('/admin/create');
  },

  updateProduct: async (req, res) => {
    res.render('admin/updateproducts', {
      seeds: await Product.get_product(req.params.id),
      types: await Types.getAll(),
      title: 'Update Product',
    });
  },

  post_Update: async (req, res) => {
    // console.log(req.body);
    await Product.update_product(req.params.id, req.body);
    res.redirect('/admin/views');
  },

  user: async (req, res) => {
    res.render('admin/users', {
      users: await Auths.getAll(),
      title: 'Manage Users'
    })
  },

  deleteUser: async (req, res) => {
    await Auths.delete(req.params.id);
    res.redirect('/admin/users');
  },

  postNew: async (req, res) => {
    let image = req.files.image;

    await image.mv(path.resolve(__dirname, '../public/image', image.name), function (err){
      if (err) console.log(err)
      News.create_new({...req.body,image: '/image/' + image.name});
      res.redirect('/admin/news');
    })
  },

  deleteNews: async (req, res) => {
    await News.delete(req.params.id);
    res.redirect('/admin/news');
  },
  
  postCreateProducts: async (req, res) => {
    let image = req.files.image;

    await image.mv(path.resolve(__dirname, '../public/image', image.name), function (err){
      if (err) console.log(err)
     Product.create_product({...req.body,image: '/image/' + image.name});
      res.redirect('/admin/views');
    })
      
  }
};
