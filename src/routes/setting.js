const express = require('express');
const router = express.Router();
const settingController = require('../app/controllers/settingController');
const settingMdw = require('../app/middlewares/setting.mdw');
const multer = require('../app/multer');

router.use('/deleteAcc', settingController.deleteAcc);
router.post('/addAcc/doctor', multer.upload.single('image'), settingController.addAccToDb)
router.get('/addAcc/doctor', settingController.addAcc);
router.use('/update/result',multer.upload.single('image'), settingController.resultInfor);
router.get('/evaluation', settingController.evaluation);
router.post('/result', settingController.result);
router.use('/update', settingController.update);
router.use('/', settingController.index);

module.exports = router;