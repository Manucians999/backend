const express = require("express");

const {
  getAllProduct,
  indexCreateProduct,
  createProduct,
} = require("../../controllers/admin/product.controller");

const router = express.Router();

router.get("/", getAllProduct);

router.get("/create", indexCreateProduct);

router.post("/create", createProduct);

module.exports = router;
