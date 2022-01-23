const express = require("express");
const { route } = require("express/lib/router");
const { getAllUser, deleteUser, updateRoleUser } = require("../../controllers/admin/user.controller");
const router = express.Router();

router.get("/", getAllUser);
router.get("/delete=:id", deleteUser);
router.get("/update=:id", updateRoleUser);


module.exports = router;
