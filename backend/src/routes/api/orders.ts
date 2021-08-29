import { Router } from 'express'; 
import { getOrders, getOrder, orderCreate } from '../../controllers/orders';

const router = Router();

// Location:  /api/order/
router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", orderCreate);

export default router;