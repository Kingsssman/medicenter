import express from 'express';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import config from 'config';

const router = express.Router();

const service_controller = require('../controllers/service.controller');

// Create storage engine
const storage = new GridFsStorage({
  url: config.get('mongoUri'),
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      (crypto as any).randomBytes(16, (err: any, buf: any) => {
        if (err) {
          return reject(err)
        }
        const filename = file.originalname
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        }
        resolve(fileInfo)
      })
    })
  },
})

const upload = multer({ storage })

router.post('/', upload.single('img'),service_controller.service_create);
router.get('/', service_controller.service_details);
router.put('/:id/', service_controller.service_update);
router.delete('/:id/', service_controller.service_delete);

export default router;