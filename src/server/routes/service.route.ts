import express from 'express';

const router = express.Router();

const service_controller = require('../controllers/service.controller');


router.post('/', service_controller.service_create);
router.get('/', service_controller.service_details);
router.put('/:id/', service_controller.service_update);
router.delete('/:id/', service_controller.service_delete);

export default router;