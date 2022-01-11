const express = require('express');
const router = express.Router();
const notifyController = require('../app/controllers/notifiController');


router.get('/bills', notifyController.bill);



module.exports = router;