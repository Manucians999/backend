const express = require("express");

const { getAllSize } = require("../../controllers/admin/size.controller");

const router = express.Router();

router.get("/sizes", getAllSize);

module.exports = router;
