import { Router } from 'express'; 
import { getProducts, getProduct, productCreate, updateProduct, deleteProduct } from '../../controllers/products';

const router = Router();

// Location:  /api/product/
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", productCreate);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;