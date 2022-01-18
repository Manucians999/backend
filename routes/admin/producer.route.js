const express = require("express");
const {
  getAllProducer,
  createProducer,
  deleteProducer,
} = require("../../controllers/admin/producer.controller");

const router = express.Router();

router.get("/", getAllProducer);

router.post("/", createProducer);

router.get("/delete=:id", deleteProducer);

module.exports = router;
