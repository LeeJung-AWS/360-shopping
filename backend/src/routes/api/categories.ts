import { Router } from 'express'; 
import { getCategories, addCategory, updateCategory } from '../../controllers/categories';

const router = Router();

// Location:  /api/category/
router.get("/", getCategories);
router.post("/", addCategory);
router.put("/:id", updateCategory);

export default router;