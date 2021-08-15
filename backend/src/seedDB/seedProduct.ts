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
        price: 24,
        onSale: false,
        quantity: 5,
        sku: "360W001",
        categories: ["Women", "Clothing", "Denim", "Jeans"],
    },
    {
        title: "Zipper Kangaroo Pocket Drawstring Hoodie",
        description: "Chocolate Brown",
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/07/02/16252200307d3f3d099403e9e38a725fc0f62720b7.webp",
        price: 13,
        onSale: false,
        quantity: 2,
        sku: "360W002",
        categories: ["Women", "Clothing", "Sweatshirts"],
    },
    {
        title: "Letter Cartoon Bear Graphic Oversized Tee",
        description: "Chocolate Brown",
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/07/19/16266899107ce35e978320df3ab1b976c96fa0be5f.webp",
        price: 13,
        onSale: false,
        quantity: 2,
        sku: "360W003",
        categories: ["Women", "Clothing", "Sweatshirts"],
    },
    {
        title: "Striped Pattern Oversized Sweater",
        description: "Oversized",
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2020/10/06/1601993024ce3c3943f0ea664ffeadd019782b8da4.webp",
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
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/01/21/1611204119991a9d107c1a63a6893bd3f4c1be6d82.webp",
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
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/03/05/1614912247cfc15bf3d30e695bdba53b51b78f94c0.webp",
        price: 10,
        onSale: false,
        quantity: 10,
        sku: "360M001",
        categories: ["Men", "Clothing", "Shirts"],
    },
    {
        title: "Men Solid Button Through Shirt",
        description: "Summber Short Sleeve Shirts",
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/06/22/16243401415b3bf4fa1b720e5df4edbc92328422dc.webp",
        price: 17,
        onSale: false,
        quantity: 2,
        sku: "360M002",
        categories: ["Men", "Clothing", "Shirts"],
    },
    {
        title: "ROMWE Guys Cartoon Graphic Tee",
        description: "Graphic Tee",
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/01/26/161162724167ad2689110fee16c0808f7da81f10f1_thumbnail_900x.webp",
        price: 10,
        onSale: false,
        quantity: 5,
        sku: "360M003",
        categories: ["Men", "Clothing", "T-Shirts"],
    },
    {
        title: "Unisex Letter Embroidered Tie Dye 1 Tee And 1 Shourts Set",
        description: "Unisex set",
        thumbnailImgURL: "https://img.ltwebstatic.com/images3_pi/2021/05/14/162099346068982be070bf670e34ff617ae0869a79_thumbnail_900x.webp",
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
  

