import { Schema, model } from 'mongoose';

interface CategoryType{
    categories: string[];
}

// Create a Schema corresponding to the document interface.
const CategorySchema = new Schema<CategoryType>({
    categories: [ {type: String, required: false} ],
});
  
  const Category = model<CategoryType>('Category', CategorySchema);
  
  export default Category;