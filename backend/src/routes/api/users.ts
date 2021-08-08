import { Router } from 'express'; 
import { userCreate } from '../../controllers/users';

const router = Router();

// Location:  /api/user/
router.post("/", userCreate);

export default router;