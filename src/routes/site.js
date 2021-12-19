const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteCotroller');

router.use('/regist', siteController.store);
router.use('/:slug', siteController.detail);
router.use('/', siteController.index);



module.exports = router;