import { Schema, model } from 'mongoose';

interface ProductType{
    title: string;
    description: string;
    imgURL: string;
    price: number;
    onSale: boolean;
    salePrice: number | null;
    quantity: number;
    sku: string;
    categories: string[];
    productCreated: Date;
}

// Create a Schema corresponding to the document interface.
const ProductSchema = new Schema<ProductType>({
    title: { type: String, required: "Title is Required" },
    description: { type: String, required: false },
    imgURL: { type: String, required: false },
    price: { type: Number, required: "Price is Required" },
    onSale: { type: Boolean, required: "onSale is Required" },
    salePrice: { type: Number, default: null },
    quantity: { type: Number, required: "Quantity is Required" },
    sku: { type: String, required: false },
    categories: [ {type: String, required: false} ],
    productCreated: { type: Date, default: Date.now },
  });
  
  const Product = model<ProductType>('Product', ProductSchema);
  
  export default Product;