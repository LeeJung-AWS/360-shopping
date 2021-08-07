import { Schema, model } from 'mongoose';

interface ProductType{
    title: string;
    description: string;
    imgURL: string;
    price: number;
    onSale: boolean;
    salePrice: number;
    quantity: number;
    sku: string;
    categories: string[];
    productCreated: Date;
}

// Create a Schema corresponding to the document interface.
const OrderSchema = new Schema<ProductType>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: false },
    price: { type: Number, required: true },
    onSale: { type: Boolean, required: true },
    salePrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    sku: { type: String, required: true },
    categories: [ {type: String, required: true} ],
    productCreated: { type: Date, default: Date.now },
  });
  
  const Order = model<ProductType>('Order', OrderSchema);
  
  export default Order;