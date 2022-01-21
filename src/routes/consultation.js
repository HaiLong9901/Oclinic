const express = require('express');
const router = express.Router();
const consultController = require('../app/controllers/consultController');
const multer = require('../app/multer');
const image = require('../app/apis');
const restrict = require('../app/middlewares/consultation.mdw');


// router.use('/:slug', consultController.detail);
router.use('/sent', multer.upload.single('image'),consultController.sent);
router.get('/',restrict, consultController.index);



module.exports = router;