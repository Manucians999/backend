const express = require('express');

const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/id=:id', productController.get_product_by_id);

router.get('/', productController.index);

router.get('/load=:load', productController.loadProducts)

module.exports = router;