const express = require("express");
const {
  register,
  postLogin,
  login,
  postRegister,
} = require("../controllers/auth.controller");

const router = express.Router();

router.get("/login", login);

router.post("/login", postLogin);

router.get("/register", register);

router.post("/register", postRegister);

module.exports = router;
