const mongoose = require("mongoose");
import Category from '../models/Category';

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
const categorySeed = [
    {
        name: "Men"
    },
    {
        name: "Women"
    },
    {
        name: "Clothing"
    },
    {
        name: "Denim"
    },
    {
        name: "Jeans"
    },
    {
        name: "Sweatshirst"
    },
    {
        name: "Sweaters"
    },
    {
        name: "Pants"
    },
    {
        name: "T-Shirts"
    },
    {
        name: "Outfits"
    },
  ];
  
  Category
    .remove({})
    .then(() => Category.collection.insertMany(categorySeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  

