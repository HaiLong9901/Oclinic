const express = require('express');
const router = express.Router();
const doctorController = require('../app/controllers/doctorController');

router.get('/surgery', doctorController.surgery);
router.use('/', doctorController.index);

module.exports = router;