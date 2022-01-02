const express = require('express');
const router = express.Router();
const consultController = require('../app/controllers/consultController');


// router.use('/:slug', consultController.detail);
router.use('/sent', consultController.sent);
router.get('/', consultController.index);



module.exports = router;