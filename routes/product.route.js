const express = require("express");
const {
  getProductBySlug,
  indexProduct,
  loadProducts,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/:slug", getProductBySlug);

router.get("/load/:slug", loadProducts);

router.get("/", indexProduct);

module.exports = router;
