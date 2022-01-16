const express = require("express");

const {
  getAllSize,
  createSize,
  deleteSize,
} = require("../../controllers/admin/size.controller");

const router = express.Router();

router.get("/", getAllSize);

router.post("/create", createSize);

router.get("/delete=:id", deleteSize);

module.exports = router;
