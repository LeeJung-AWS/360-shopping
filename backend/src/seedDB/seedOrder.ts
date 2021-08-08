const mongoose = require("mongoose");
import Order from '../models/Order';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/360shopping_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.catch((err: Error) => {
  console.log(err);
});


// IDs from Product DB and User DB, so run userSeed and productSeed first.
const orderSeed = [
    {
        userId: "610fecf3e1736c25e7289de9",
        productId: "610ff24cc0a57e2a0a4a80bf",
    },
    {
        userId: "610fecf3e1736c25e7289de9",
        productId: "610ff24cc0a57e2a0a4a80c0",
    },
    {
        userId: "610fecf3e1736c25e7289de9",
        productId: "610ff24cc0a57e2a0a4a80c3",
    },
    {
        userId: "610fecf3e1736c25e7289dea",
        productId: "610ff24cc0a57e2a0a4a80c7",
    },
    {
        userId: "610fecf3e1736c25e7289dea",
        trackingNumber: "123123123",
        productId: "610ff24cc0a57e2a0a4a80c5",
    },
    {
        userId: "610fecf3e1736c25e7289dea",
        productId: "610ff24cc0a57e2a0a4a80c4",
    },
  ];
  
  Order
    .remove({})
    .then(() => Order.collection.insertMany(orderSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  

