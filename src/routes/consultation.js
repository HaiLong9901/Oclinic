const express = require('express');
const router = express.Router();
const consultController = require('../app/controllers/consultController');
const multer = require('../app/multer');
const image = require('../app/apis');
const restrict = require('../app/middlewares/consultation.mdw');

router.get('/reply/:id_reply', consultController.detailReply);
router.post('/reply', consultController.reply);
router.get('/detail/:id_clt', consultController.detail);
router.use('/sent', multer.upload.single('image'),consultController.sent);
router.get('/',restrict, consultController.index);



module.exports = router;