const express = require('express');
const router = express.Router();
const settingController = require('../app/controllers/settingController');
const settingMdw = require('../app/middlewares/setting.mdw');


router.use('/',settingMdw, settingController.index);

module.exports = router;