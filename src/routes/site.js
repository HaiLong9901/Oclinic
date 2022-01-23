const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteCotroller');

router.get('/logout', siteController.logout);
router.get('/setting', siteController.setting);
router.post('/login', siteController.handleLogin);
router.get('/login', siteController.login);
router.post('/register', siteController.hanleRegister);
router.get('/register', siteController.register);
router.use('/:slug', siteController.detail);
router.use('/', siteController.index);



module.exports = router;