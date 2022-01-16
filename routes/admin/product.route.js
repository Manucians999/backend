const express = require("express");

const { getAllProduct } = require("../../controllers/admin/product.controller");

const router = express.Router();

router.get("/", getAllProduct);

module.exports = router;
