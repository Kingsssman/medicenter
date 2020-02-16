import express from 'express';
import multer from 'multer'

let upload = multer();

const router = express.Router();

const doctors_controller = require('../controllers/doctors.controller');

router.post('/', upload.single('img'),doctors_controller.doctors_create);
router.get('/', doctors_controller.doctors_details);
router.put('/:id', upload.single('img'), doctors_controller.doctors_update);
router.delete('/:id', doctors_controller.doctors_delete);

export default router;