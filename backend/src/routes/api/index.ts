import { Router } from 'express';
const router = Router();

import users from './users';
import products from './products';
import orders from './orders';

//Routes
router.use('/user', users);
router.use('/product', products);
router.use('/order', orders);

export default router;