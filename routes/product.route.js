const express = require("express");
const {
  getProductBySlug,
  indexProduct,
  loadProducts,
  search,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/:slug", getProductBySlug);

router.get("/load/:slug", loadProducts);

router.get("/", indexProduct);

router.get("/search", search);

module.exports = router;
