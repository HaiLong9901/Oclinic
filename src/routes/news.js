const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/newsCotroller');


router.get('/:slug', newsController.detail);
router.use('/', newsController.index);



module.exports = router;