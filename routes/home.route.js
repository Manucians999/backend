const express = require("express");

const { indexHome, logout } = require("../controllers/home.controller");

const router = express.Router();

router.get("/", indexHome);

router.get("/logout", logout);

module.exports = router;
