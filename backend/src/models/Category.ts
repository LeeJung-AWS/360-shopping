import { Schema, model } from 'mongoose';

interface CategoryType{
    name: string;
}

// Create a Schema corresponding to the document interface.
const CategorySchema = new Schema<CategoryType>({
    name: {type: String, required: "Category Name is required"},
});
  
  const Category = model<CategoryType>('Category', CategorySchema);
  
  export default Category;