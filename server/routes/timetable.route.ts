const express = require('express');
const router = express.Router();

const timetable_controller = require('../controllers/timetable.controller');

router.post('/create', timetable_controller.timetable_create);
router.get('/', timetable_controller.timetable_details);
router.put('/:id/update', timetable_controller.timetable_update);
router.delete('/:id/delete', timetable_controller.timetable_delete);

module.exports = router;
export {};
