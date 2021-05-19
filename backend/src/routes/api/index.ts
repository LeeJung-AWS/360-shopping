import { Router } from 'express';
const router = Router();

// TEST API
import testApi from './testApi';



//Routes
router.use('/test', testApi);

export default router;