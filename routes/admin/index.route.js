const express = require("express");

const { indexAdminPage } = require("../../controllers/admin/index.controller");

const router = express.Router();

router.get("/", indexAdminPage);

module.exports = router;
