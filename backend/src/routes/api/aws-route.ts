import { Router } from 'express';
import { getFileUploadURL } from '../../controllers/aws';

const router = Router();

// Location: /api/aws
router.get("/getFileUploadURL", getFileUploadURL);

export default router;