import { Router } from 'express'; 
import { getCategories, addCategory, updateCategory, deleteCategory } from '../../controllers/categories';

const router = Router();

// Location:  /api/category/
router.get("/", getCategories);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;