const mongoose = require("mongoose");
import Product from '../models/Product';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/360shopping_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
.catch((err: Error) => {
  console.log(err);
});


const ProductSeed = [
    {
        title: "Straight Leg Jeans",
        description: "Light Wash",
        thumbnailImgURL: null,
        imgURLlists: [""],
        price: 24,
        onSale: false,
        quantity: 5,
        sku: "360W001",
        categories: ["Women", "Clothing", "Denim", "Jeans"],
    },
    {
        title: "Zipper Kangaroo Pocket Drawstring Hoodie",
        description: "Chocolate Brown",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping01.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping01.png"],
        price: 13,
        onSale: false,
        quantity: 2,
        sku: "360W002",
        categories: ["Women", "Clothing", "Sweatshirts"],
    },
    {
        title: "Letter Cartoon Bear Graphic Oversized Tee",
        description: "Chocolate Brown",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping02.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping02.png"],
        price: 13,
        onSale: false,
        quantity: 2,
        sku: "360W003",
        categories: ["Women", "Clothing", "Sweatshirts"],
    },
    {
        title: "Striped Pattern Oversized Sweater",
        description: "Oversized",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping03.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping03.png"],
        price: 20,
        onSale: true,
        salePrice: 17,
        quantity: 10,
        sku: "360W004",
        categories: ["Women", "Clothing", "Sweaters"],
    },
    {
        title: "Solid Slant Pocket Belted Suspender Pants",
        description: "Elegant Black Wide Leg",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping04.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping04.png"],
        price: 25,
        onSale: true,
        salePrice: 18,
        quantity: 10,
        sku: "360W005",
        categories: ["Women", "Clothing", "Pants"],
    },
    {
        title: "Men Solid Crew Neck Tee",
        description: "Black Shirts",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping05.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping05.png"],
        price: 10,
        onSale: false,
        quantity: 10,
        sku: "360M001",
        categories: ["Men", "Clothing", "Shirts"],
    },
    {
        title: "Men Solid Button Through Shirt",
        description: "Summber Short Sleeve Shirts",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping06.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping06.png"],
        price: 17,
        onSale: false,
        quantity: 2,
        sku: "360M002",
        categories: ["Men", "Clothing", "Shirts"],
    },
    {
        title: "ROMWE Guys Cartoon Graphic Tee",
        description: "Graphic Tee",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping07.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping07.png"],
        price: 10,
        onSale: false,
        quantity: 5,
        sku: "360M003",
        categories: ["Men", "Clothing", "T-Shirts"],
    },
    {
        title: "Unisex Letter Embroidered Tie Dye 1 Tee And 1 Shourts Set",
        description: "Unisex set",
        thumbnailImgURL: "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping08.png",
        imgURLlists: ["https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping08.png"],
        price: 25,
        onSale: true,
        salePrice: 20,
        quantity: 10,
        sku: "360M004",
        categories: ["Men", "Clothing", "Outfits"],
    },
  ];
  
  Product
    .remove({})
    .then(() => Product.collection.insertMany(ProductSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  

