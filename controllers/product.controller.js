const Product = require('../models/products.model');


module.exports = {
  get_product_by_id: async (req, res)=>{
    const type = await Product.getAll();
    const product = await Product.get_product(req.params.id);
    res.render('product/detail',{
      types: type,
      seed: product,
      image: req.image,
      style: product.image,
      title: 'Product Page - Website about the House'
    });
  }, 
  
  index: async (req, res) => {
    const product = await Product.getAll();
    res.render('product/index', {
      data: product,
      title: 'Products Page - Website about the House'
    })
  },

  loadProducts: async (req, res) => {
    const product = await Product.getAll();
    res.render('product/load', {
      data: product,
      title: 'Products Page - Website about the House'
    })
  }
}

