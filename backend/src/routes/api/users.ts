import { Router } from 'express'; 
import { getSingleUser, userCreate, login, updateUser } from '../../controllers/users';

const router = Router();
// import middleware
import { authMiddleware } from '../../libs/auth';

// Location:  /api/user/
// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(userCreate).put(authMiddleware);
router.route('/login').post(login);
router.route('/me').get(authMiddleware, getSingleUser);
router.put("/:id", updateUser);

export default router;