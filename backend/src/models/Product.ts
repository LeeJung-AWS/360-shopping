import { Schema, model } from 'mongoose';

interface ProductType{
    title: string;
    description: string;
    thumbnailImgURL: string;
    imgURLlists: string[];
    price: number;
    onSale: boolean;
    salePrice: number;
    quantity: number;
    sku: string;
    categories: string[];
    productCreated: Date;
}

// Create a Schema corresponding to the document interface.
const ProductSchema = new Schema<ProductType>({
    title: { type: String, required: "Title is Required" },
    description: { type: String, required: false },
    thumbnailImgURL: { type: String, required: false },
    imgURLlists: [ {type: String, required: false} ],
    price: { type: Number, required: "Price is Required" },
    onSale: { type: Boolean, required: "onSale is Required" },
    salePrice: { type: Number, default: 0 },
    quantity: { type: Number, required: "Quantity is Required" },
    sku: { type: String, required: false },
    categories: [ {type: String, required: false} ],
    productCreated: { type: Date, default: Date.now },
  });
  
  const Product = model<ProductType>('Product', ProductSchema);
  
  export default Product;