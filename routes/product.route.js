const express = require("express");

const productController = require("../controllers/product.controller");

const router = express.Router();

router.get("/:slug", productController.get_product_by_slug);

router.get("/", productController.index);

router.get("/load=:load", productController.loadProducts);

module.exports = router;
