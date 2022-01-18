const express = require("express");
const { getAllUser } = require("../../controllers/admin/user.controller");
const router = express.Router();

router.get("/", getAllUser);

module.exports = router;
