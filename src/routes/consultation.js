const express = require('express');
const router = express.Router();
const consultController = require('../app/controllers/consultController');
const multer = require('../app/multer');


// router.use('/:slug', consultController.detail);
router.use('/sent',multer.single('image'), consultController.sent);
router.get('/', consultController.index);



module.exports = router;