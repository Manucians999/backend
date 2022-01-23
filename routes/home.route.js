const express = require('express');

const homeController = require('../controllers/home.controller');

const router = express.Router();

router.get('/', homeController.index);

router.get('/logout', homeController.logout);

module.exports = router;