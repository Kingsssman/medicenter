const express = require('express');
const router = express.Router();

const booking_controller = require('../controllers/booking.controller');

router.post('/create', booking_controller.booking_create);
router.get('/', booking_controller.booking_details);
router.put('/:id/update', booking_controller.booking_update);
router.delete('/:id/delete', booking_controller.booking_delete);

module.exports = router;
export {};
