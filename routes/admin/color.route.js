const express = require("express");

const {
  getAllColor,
  createColor,
  deleteColor,
  updateStatusColor,
} = require("../../controllers/admin/color.controller");

const router = express.Router();



router.get("/", getAllColor);

router.post("/", createColor);

router.get("/delete=:id", deleteColor);

router.get("/:id", updateStatusColor);



module.exports = router;
