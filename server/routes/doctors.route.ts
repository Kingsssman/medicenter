const express = require('express');
const router = express.Router();

const doctors_controller = require('../controllers/doctors.controller');

router.post('/create', doctors_controller.doctors_create);
router.get('/:id', doctors_controller.doctors_details);
router.put('/:id/update', doctors_controller.doctors_update);
router.delete('/:id/delete', doctors_controller.doctors_delete);

module.exports = router;
export {};
