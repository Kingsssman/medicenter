import express from 'express';
import multer from 'multer'

let upload = multer();

const router = express.Router();

const service_controller = require('../controllers/service.controller');

router.post('/', upload.single('img'), service_controller.service_create);
router.get('/', service_controller.service_details);
router.put('/:id/', upload.single('img'), service_controller.service_update);
router.delete('/:id/', service_controller.service_delete);

export default router;