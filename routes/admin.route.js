// const multer = require('multer');
// const sharp = require('sharp');
// const uuidv4  = require('uuid/v4');
// const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get('/', adminController.index);

router.get('/', adminController.product);

router.get('/create', adminController.create);

router.get('/create/products', adminController.createProducts);

router.get('/create/types', adminController.createTypes);

router.get('/create/kinds', adminController.createKinds);

router.get('/views', adminController.viewsProduct);

router.get('/news', adminController.viewNews);

router.get('/news/add', adminController.addNews);

router.get('/news/delete=:id', adminController.deleteNews);

router.get('/views/delete=:id', adminController.deleteProduct);

router.get('/create/delete=:id', adminController.deleteTypes);

router.get('/create/delete=:id', adminController.deleteKinds);

router.get('/views/update=:id', adminController.updateProduct);

router.get('/users', adminController.user);

router.get('/users/delete=:id', adminController.deleteUser);

router.post('/news/add', adminController.postNew);

router.post('/create/products',adminController.postCreateProducts);

router.post('/views/update=:id', adminController.post_Update);

module.exports = router;