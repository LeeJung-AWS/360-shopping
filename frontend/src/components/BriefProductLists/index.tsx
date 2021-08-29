// Style: sass/components/_briefProductLists.scss

import React, { useState, useEffect } from 'react';
import { NumberComma } from '../../utils/helpers';

import Auth from '../../utils/auth';
import { getProducts, getMe, updateUser } from "../../utils/API";

interface ProductDataType {
    _id: string;
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

interface ChildProps{
    favoriteProductData?: ProductDataType[] 
    favoriteProductID?: string[]
    getFavoriteProductFuncFromHomePage?: () => Promise<void>
}

const BriefProductsLists: React.FC<ChildProps> = ({ favoriteProductData, favoriteProductID, getFavoriteProductFuncFromHomePage }) => {
    const [ quantityOfProduct, setQuantityOfProduct] = useState<{[k: string]: number}>();
    const [ unitPrice, setUnitPrice] = useState<{[k: string]: number}>();
    const [ subTotalPrice, setSubTotalPrice] = useState<{[k: string]: number}>();
    const [ totalPrice, setTotalPrice ] = useState<number>(0);
    
    // Set initial Quantitiy of products and their subTotal.
    useEffect(() => {
        let tempQuantityOfProduct:{[k: string]: number} = {};
        let tempSubTotalPrice:{[k: string]: number} = {};
        let tempUnitPrice:{[k: string]: number} = {};
        let totalPrice = 0;

        favoriteProductData?.forEach(item => {
            // console.log(item)
            tempQuantityOfProduct[item._id] = 1;

            if(item.onSale){
                tempUnitPrice[item._id] = item.salePrice;
            }else{
                tempUnitPrice[item._id] = item.price;
            }

            tempSubTotalPrice[item._id] = tempUnitPrice[item._id] * 1;
        })

        setQuantityOfProduct(tempQuantityOfProduct);
        setUnitPrice(tempUnitPrice);
        setSubTotalPrice(tempSubTotalPrice);

        // console.log(tempSubTotalPrice);
        for(const property in tempSubTotalPrice){
            totalPrice += tempSubTotalPrice[property];
        }

        setTotalPrice(totalPrice);

    }, [favoriteProductData])

    function increaser(event: any) {
        // console.log("increaser")
        let productID:string = event.target.parentNode.dataset.id;
        let tempQuantityOfProduct:{[k: string]: number} = {};
        let tempUnitPrice:{[k: string]: number} = {};
        let tempSubTotalPrice:{[k: string]: number} = {};
        let totalPrice = 0;

        tempQuantityOfProduct = {...quantityOfProduct};
        tempUnitPrice = {...unitPrice}
        tempSubTotalPrice = {...subTotalPrice}

        tempQuantityOfProduct[productID]++;
        tempSubTotalPrice[productID] = tempUnitPrice[productID] * tempQuantityOfProduct[productID];

        setQuantityOfProduct(tempQuantityOfProduct)
        setSubTotalPrice(tempSubTotalPrice);

        for(const property in tempSubTotalPrice){
            totalPrice += tempSubTotalPrice[property];
        }

        setTotalPrice(totalPrice);
    }

    function decreaser(event: any) {
        // console.log("decreaser")
        let productID:string = event.target.parentNode.dataset.id;
        // console.log(productID)
        let tempQuantityOfProduct:{[k: string]: number} = {};
        let tempUnitPrice:{[k: string]: number} = {};
        let tempSubTotalPrice:{[k: string]: number} = {};
        let totalPrice = 0;

        tempQuantityOfProduct = {...quantityOfProduct};
        tempUnitPrice = {...unitPrice}
        tempSubTotalPrice = {...subTotalPrice}

        if(tempQuantityOfProduct[productID] > 0){
            tempQuantityOfProduct[productID]--;
        }


        tempSubTotalPrice[productID] = tempUnitPrice[productID] * tempQuantityOfProduct[productID];

        setQuantityOfProduct(tempQuantityOfProduct)
        setSubTotalPrice(tempSubTotalPrice);

        for(const property in tempSubTotalPrice){
            totalPrice += tempSubTotalPrice[property];
        }

        setTotalPrice(totalPrice);
    }

    async function onClickDeleteIcon(event: any){
        const productId:string = event.target.dataset.id;

        if(Auth.loggedIn()){
            // console.log(favoriteProductID);
            let tempFavoritedProducts = favoriteProductID || [];
            if(tempFavoritedProducts.includes(productId)){
                tempFavoritedProducts.splice(tempFavoritedProducts.indexOf(productId), 1);
            }
            // else{
            //     tempFavoritedProducts.push(productId)
            // }
            console.log(tempFavoritedProducts);
            // if(tempFavoritedProducts){
            //     setFavoritedProduct([...tempFavoritedProducts])
            // }

            // Store Favorited Product into the user by ID
            const currentUser: any = Auth.getProfile();
            // Add favorite product on User DB
            try {
                await updateUser(currentUser.data._id, {"favoriteProduct": tempFavoritedProducts})
            }catch (err) {
                console.log(err);
            }
        }

        if(getFavoriteProductFuncFromHomePage){
            getFavoriteProductFuncFromHomePage();
        }


    }   

    return (<section className="container-box product-list">
        {favoriteProductData?.map(product => {
            return(
                    <div className="product-list-body" key={product._id}>
                        <div className="">
                            <img src={product.thumbnailImgURL} width="100px" height="125px" alt="product" />
                        </div>
                        <div className="product-list-body-info">
                            <div className="product-list-body-info-title">{product.title}</div>
                            <div className="product-list-body-info-unitprice">
                                {/* <div>US${product.onSale ? NumberComma(product.salePrice): NumberComma(product.price)}</div> */}
                                <div>
                                    US${product.onSale? <span className="">{NumberComma(product.salePrice)}</span> : <></>}
                                                        <span className={product.onSale ? "cross-price" : ""}>{NumberComma(product.price)}</span>
                                </div>
                                
                                <div className="product-list-body-info-unitprice-icon">
                                    <i className="far fa-trash-alt" data-id={product._id} onClick={onClickDeleteIcon}></i>
                                </div>
                            </div>
                            <div className="product-list-body-info-quantity-btn">
                                <div className="product-list-body-info-quantity-btn-controll" data-id={product._id}>
                                    <button className="product-list-body-info-quantity-btn-left" onClick={decreaser}>-</button>
                                    <input className="product-list-body-info-quantity-btn-center" value={quantityOfProduct? quantityOfProduct[product._id] : "0"} />
                                    <button className="product-list-body-info-quantity-btn-right" onClick={increaser}>+</button>
                                </div>
                                {/* subTotalPrice */}
                                <div>Total: <b>US${subTotalPrice? subTotalPrice[product._id]: "null"}</b></div>
                             </div>
                        </div>
                    </div>
            )
        })}

        <div className="total-price">
                Total: <span style={{color:'red', fontSize:'1.2rem', fontWeight:'bolder'}}>US${totalPrice? NumberComma(totalPrice) : 0}</span>
        </div>
        <button id="place-order-btn">Place Order</button>
    </section>)

}

export default BriefProductsLists;