const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newsCotroller');


router.use('/:slug', newsController.detail);
router.get('/', newsController.detail);



module.exports = router;