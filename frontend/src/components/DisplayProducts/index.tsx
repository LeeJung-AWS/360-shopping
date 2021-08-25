// Style : sass/components/_displayProducts.scss
import { useState, useEffect } from "react";

import SignForm from "../SignForm";

import { NumberComma } from "../../utils/helpers";
import Auth from '../../utils/auth';
import { getProducts } from "../../utils/API";

import dummyProductImg from '../../assets/img/dummy-product-img.png';


interface productDataType {
    "imgURLlists": string[],
    "salePrice": number,
    "categories": string[],
    "_id": string,
    "title": string,
    "description": string,
    "thumbnailImgURL": string,
    "price": number,
    "onSale": boolean,
    "quantity": number,
    "sku": string,
    "productCreated": string
}

const DisplayProducts: React.FC = () => {
    const [ allproductLists, setAllproductLists ] = useState<productDataType[] | undefined>();

    useEffect( () => {
        getAllProducts();
    }, [])

    async function getAllProducts() {
        const productLists = await getProducts();
        setAllproductLists(productLists);
        console.log(productLists);
    }

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
        // Check if loggedin if not, Show signin modal
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
                {allproductLists !== undefined ? allproductLists.map(product => {
                    return(
                            <div className="product-item" key={product._id} data-id={product._id}>
                                <div className="product-item-top" onClick={onClickProduct}>
                                    <img src={product.thumbnailImgURL?product.thumbnailImgURL:dummyProductImg} alt="product" />
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
                }): 'loading...'}
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