import { Router } from 'express'; 
import { getCategories, addCategory, updateCategory, deleteCategory } from '../../controllers/categories';

const router = Router();

// Location:  /api/category/
router.get("/", getCategories);
router.post("/", addCategory);
router.put("/:name", updateCategory);
router.delete("/:name", deleteCategory);

export default router;