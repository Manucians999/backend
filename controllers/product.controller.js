const Product = require('../models/product.model');


module.exports = {
  get_product_by_id: async (req, res)=>{
    const type = await Product.find();
    const product = await Product.findById(req.params.id);
    res.render('product/detail',{
      types: type,
      seed: product,
      image: req.image,
      style: product.image,
      title: 'Product Page - Website about the House'
    });
  }, 
  
  index: async (req, res) => {
    const product = await Product.find();
    res.render('product/index', {
      data: product,
      title: 'Products Page - Website about the House'
    })
  },

  loadProducts: async (req, res) => {
    const product = await Product.find();
    res.render('product/load', {
      data: product,
      title: 'Products Page - Website about the House'
    })
  }
}

