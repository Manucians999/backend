const express = require("express");

const {
  getAllSize,
  createSize,
  deleteSize,
} = require("../../controllers/admin/size.controller");
const { validationSizes } = require("../../middlewares/validation.middlewares");

const router = express.Router();

router.get("/", getAllSize);

router.post("/", validationSizes,createSize);

router.get("/delete=:id", deleteSize);

module.exports = router;
