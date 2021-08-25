// Style : sass/components/_displayProducts.scss
import { useState } from "react";

import SignForm from "../SignForm";

import { NumberComma } from "../../utils/helpers";
import Auth from '../../utils/auth';

const DisplayProducts: React.FC = () => {
    const dummyProductLists = [
        {
            "imgURLlists": [
              ""
            ],
            "salePrice": 0,
            "categories": [
              "Women",
              "Clothing",
              "Denim",
              "Jeans"
            ],
            "_id": "611f2d2e3733aba31b608148",
            "title": "Straight Leg Jeans",
            "description": "Light Wash",
            "thumbnailImgURL": null,
            "price": 24,
            "onSale": false,
            "quantity": 5,
            "sku": "360W001",
            "productCreated": "2021-08-25T19:42:26.636Z"
          },
          {
            "imgURLlists": [
              "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping04.png"
            ],
            "salePrice": 18,
            "categories": [
              "Women",
              "Clothing",
              "Pants"
            ],
            "_id": "611f2d2e3733aba31b60814c",
            "title": "Solid Slant Pocket Belted Suspender Pants",
            "description": "Elegant Black Wide Leg",
            "thumbnailImgURL": "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping04.png",
            "price": 25,
            "onSale": true,
            "quantity": 10,
            "sku": "360W005",
            "productCreated": "2021-08-25T19:42:26.637Z"
          },
          {
            "imgURLlists": [
              "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping05.png"
            ],
            "salePrice": 0,
            "categories": [
              "Men",
              "Clothing",
              "Shirts"
            ],
            "_id": "611f2d2e3733aba31b60814d",
            "title": "Men Solid Crew Neck Tee",
            "description": "Black Shirts",
            "thumbnailImgURL": "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping05.png",
            "price": 10,
            "onSale": false,
            "quantity": 10,
            "sku": "360M001",
            "productCreated": "2021-08-25T19:42:26.637Z"
          },
          {
            "imgURLlists": [
              "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping06.png"
            ],
            "salePrice": 0,
            "categories": [
              "Men",
              "Clothing",
              "Shirts"
            ],
            "_id": "611f2d2e3733aba31b60814e",
            "title": "Men Solid Button Through Shirt",
            "description": "Summber Short Sleeve Shirts",
            "thumbnailImgURL": "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping06.png",
            "price": 17,
            "onSale": false,
            "quantity": 2,
            "sku": "360M002",
            "productCreated": "2021-08-25T19:42:26.637Z"
          },
          {
            "imgURLlists": [
              "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping07.png"
            ],
            "salePrice": 0,
            "categories": [
              "Men",
              "Clothing",
              "T-Shirts"
            ],
            "_id": "611f2d2e3733aba31b60814f",
            "title": "ROMWE Guys Cartoon Graphic Tee",
            "description": "Graphic Tee",
            "thumbnailImgURL": "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping07.png",
            "price": 10,
            "onSale": false,
            "quantity": 5,
            "sku": "360M003",
            "productCreated": "2021-08-25T19:42:26.637Z"
          },
          {
            "imgURLlists": [
              "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping08.png"
            ],
            "salePrice": 20,
            "categories": [
              "Men",
              "Clothing",
              "Outfits"
            ],
            "_id": "611f2d2e3733aba31b608150",
            "title": "Unisex Letter Embroidered Tie Dye 1 Tee And 1 Shourts Set",
            "description": "Unisex set",
            "thumbnailImgURL": "https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping08.png",
            "price": 25,
            "onSale": true,
            "quantity": 10,
            "sku": "360M004",
            "productCreated": "2021-08-25T19:42:26.637Z"
          }
]

const [ favoritedProduct, setFavoritedProduct ] = useState<string[] | undefined>();

function onClickProduct(event: any) {
    const productId = event.target.parentNode.parentNode.dataset.id;
    console.log(productId);
    // TODO: Show a product in Detail.
}

function onClickAddToCartBtn(event: any) {
    event.stopPropagation();
    const productId = event.target.parentNode.parentNode.dataset.id;
    console.log(productId);
    // TODO: Increase a number of Cart
}

function onClickFavoriteBtn(event: any) {
    // TODO: Check if loggedin if not, Show signin modal
    if(Auth.loggedIn()){
        const productId:string = event.target.parentNode.parentNode.parentNode.dataset.id;
    
        let tempFavoritedProducts = favoritedProduct || [];
        if(tempFavoritedProducts.includes(productId)){
            tempFavoritedProducts.splice(tempFavoritedProducts.indexOf(productId), 1);
        }else{
            tempFavoritedProducts.push(productId)
        }
        // console.log(tempFavoritedProducts);
        if(tempFavoritedProducts){
            setFavoritedProduct([...tempFavoritedProducts])
        }

        //TODO: Store Favorited Product into the user by ID

    }else{
        // Show signin modal
        console.log("Show signin Modal");
        const displayProductModalEl = document.getElementById('displayProduct-modal')!;
        displayProductModalEl.style.display = 'block';

        // block Scrollable Body
        document.body.style.overflowY = 'hidden';

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event: any) {
            if (event.target === displayProductModalEl) {   
                displayProductModalEl.style.display = 'none';
    
                // Active Scrollable Body
                document.body.style.overflowY = 'auto';
            }
        }
    }


    // TODO: Add the product on favorite DB
}

function onClickModalCloseBtn() {
    const displayProductModalEl = document.getElementById('displayProduct-modal')!;
    displayProductModalEl.style.display = 'none';
    
    // Active Scrollable Body
    document.body.style.overflowY = 'auto';
}

    return (<>
        <section className="products-lists-container">
            <section className="products-lists">
                {dummyProductLists.map(product => {
                    return(
                            <div className="product-item" key={product._id} data-id={product._id}>
                                <div className="product-item-top" onClick={onClickProduct}>
                                    <img src="https://img.ltwebstatic.com/images3_pi/2021/07/02/16252200307d3f3d099403e9e38a725fc0f62720b7.webp" alt="product" />
                                    <button className="product-item-top-btn" onClick={onClickAddToCartBtn}>ADD TO CART</button>
                                    <div className="product-item-top-title">{product.title}</div>
                                </div>
                                <div className="product-item-bottom">
                                    <div className="product-item-bottom-price">
                                        <span>US$</span>
                                        {product.onSale? <span className="">{NumberComma(product.salePrice)}</span> : <></>}
                                        <span className={product.onSale ? "cross-price" : ""}>{NumberComma(product.price)}</span>
                                    </div>
                                    <div className="product-item-bottom-icon">
                                        {favoritedProduct?.some(productId => productId === product._id) 
                                            ? <i className="fas fa-heart filledHeart" onClick={onClickFavoriteBtn}></i> 
                                            : <i className="far fa-heart" onClick={onClickFavoriteBtn}></i>
                                        }
                                    </div>
                                </div>
                            </div>
                )
                })}
            </section>
        </section>
        <section className='modal' id="displayProduct-modal">
            <div className='modal-content' id='displayProduct-modal-content'>
                <button id="displayProduct-modal-content-closebtn" onClick={onClickModalCloseBtn}>Close</button>
                <SignForm />
            </div>
        </section>
    </>)
}

export default DisplayProducts;