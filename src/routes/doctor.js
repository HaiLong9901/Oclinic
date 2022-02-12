const express = require('express');
const router = express.Router();
const doctorController = require('../app/controllers/doctorController');

router.get('/department/:id_dep', doctorController.getDoctorOfDepartment);
router.get('/:id_doc', doctorController.showProfile);
router.use('/', doctorController.index);

module.exports = router;