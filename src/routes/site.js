const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteCotroller');

router.get('/profile', siteController.profile);
router.post('/login', siteController.handleLogin);
router.get('/login', siteController.login);
router.post('/register', siteController.hanleRegister);
router.get('/register', siteController.register);
router.use('/:slug', siteController.detail);
router.use('/', siteController.index);



module.exports = router;