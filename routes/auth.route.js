const express = require("express");
const {
  register,
  postLogin,
  login,
  postRegister,
} = require("../controllers/auth.controller");
const { validatorRegister, validatorLogin } = require("../middlewares/validation.middlewares");

const router = express.Router();

router.get("/login", login);

router.post("/login", validatorLogin, postLogin);

router.get("/register", register);

router.post("/register", validatorRegister, postRegister);

module.exports = router;
