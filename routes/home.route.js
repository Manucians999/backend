const express = require('express');

const homeController = require('../controllers/home.controller');

const router = express.Router();

router.get('/', homeController.index);

router.get('/about', homeController.about);

router.get('/logout', homeController.logout);

router.get('/register', homeController.register);

router.get('/news', homeController.news);

router.post('/register', homeController.postRegister);

module.exports = router;