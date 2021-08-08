import { Router } from 'express';
const router = Router();

import users from './users';
import products from './products';

//Routes
router.use('/user', users);
router.use('/product', products);

export default router;