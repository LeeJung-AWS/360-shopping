import { Schema, model } from 'mongoose';

interface OrderType{
    date: Date;
    trackingNumber: number | null;
    userId: string;
    productId: string;
}

// Create a Schema corresponding to the document interface.
const OrderSchema = new Schema<OrderType>({
    date: { type: Date, default: Date.now },
    trackingNumber: { type: Number, default: null },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  });
  
  const Order = model<OrderType>('Order', OrderSchema);
  
  export default Order;