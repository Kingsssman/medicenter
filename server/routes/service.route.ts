const express = require('express');
const router = express.Router();

const service_controller = require('../controllers/service.controller');

router.post('/create', service_controller.service_create);
router.get('/:id', service_controller.service_details);
router.put('/:id/update', service_controller.service_update);
router.delete('/:id/delete', service_controller.service_delete);

module.exports = router;
export {};
