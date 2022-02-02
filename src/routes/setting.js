const express = require('express');
const router = express.Router();
const settingController = require('../app/controllers/settingController');
const settingMdw = require('../app/middlewares/setting.mdw');

router.post('/update/result', settingController.resultInfor);
router.get('/evaluation', settingController.evaluation);
router.post('/result', settingController.result);
router.use('/update', settingController.update);
router.use('/', settingController.index);

module.exports = router;