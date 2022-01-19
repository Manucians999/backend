const express = require("express");

const {
  getAllProduct,
  indexCreateProduct,
  createProduct,
  updateProduct,
  indexUpdateProduct,
  deleteProduct,
} = require("../../controllers/admin/product.controller");

const router = express.Router();

router.get("/", getAllProduct);

router.get("/create", indexCreateProduct);

router.post("/create", createProduct);

router.get("/update/:slug", indexUpdateProduct);

router.post("/update/:slug", updateProduct);

router.get("/delete/:slug", deleteProduct);

module.exports = router;
