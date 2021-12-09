const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteCotroller');


router.get('/:slug', siteController.detail);
router.get('/', siteController.index);



module.exports = router;