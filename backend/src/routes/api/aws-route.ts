import { Router } from 'express';
import { getFileUploadURL, deleteS3Img } from '../../controllers/aws';

const router = Router();

// Location: /api/aws
router.get("/getFileUploadURL", getFileUploadURL);
router.delete("/deleteS3Img", deleteS3Img);

export default router;