const mongoose = require("mongoose");
import User from '../models/User';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/360shopping_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.catch((err: Error) => {
  console.log(err);
});


const userSeed = [
    {
        name: "admin",
        username: "admin",
        email: "admin@admin.com",
        password: "password",
        address: "WA",
        phone: "2061231234",
    },
    {
        name: "amber",
        username: "amber",
        email: "amber@amber.com",
        password: "password",
        address: "WA",
        phone: "2061231234",
    },
    {
        name: "jehyun",
        username: "jehyun",
        email: "jehyun@jehyun.com",
        password: "password",
        address: "WA",
        phone: "2061231234",
    },
  ];
  
  User
    .remove({})
    .then(() => User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  

