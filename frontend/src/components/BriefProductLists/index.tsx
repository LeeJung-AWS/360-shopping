// Style: sass/components/_briefProductLists.scss

import React, { useState, useEffect } from 'react';
import { NumberComma } from '../../utils/helpers';

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
}

const BriefProductsLists: React.FC<ChildProps> = ({ favoriteProductData }) => {
    console.log(favoriteProductData);
    const [ quantityOfProduct, setQuantityOfProduct] = useState<{[k: string]: string}>();

    useEffect(() => {
        let tempQuantityOfProduct:{[k: string]: string} = {};

        favoriteProductData?.map(item => {
            return tempQuantityOfProduct[item._id] = '1';
        })

        setQuantityOfProduct(tempQuantityOfProduct);
    }, [favoriteProductData])

    function increaser(event: any) {
        console.log("increaser")
        console.log(event.target)
    }

    function decreaser(event: any) {
        console.log("decreaser")
        let productID:string = event.target.parentNode.dataset.id;
        console.log(productID)
        let temp:{[k: string]: string} = {};
        temp[productID] = '5';
        console.log(temp);
        setQuantityOfProduct(temp)
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
                                <div>US${NumberComma(product.price)}</div>
                                <div className="product-list-body-info-unitprice-icon"><i className="far fa-trash-alt"></i></div>
                            </div>
                            <div className="product-list-body-info-quantity-btn">
                                <div className="product-list-body-info-quantity-btn-controll" data-id={product._id}>
                                    <button className="product-list-body-info-quantity-btn-left" onClick={decreaser}>-</button>
                                    <input className="product-list-body-info-quantity-btn-center" value={quantityOfProduct? quantityOfProduct[product._id] : "0"} />
                                    <button className="product-list-body-info-quantity-btn-right" onClick={increaser}>+</button>
                                </div>
                                <div>Total: <b>US${quantityOfProduct? NumberComma(parseInt(quantityOfProduct[product._id]) * product.price): "null"}</b></div>
                            </div>
                        </div>
                    </div>
            )
        })}

        <div className="total-price">
                Total: <span style={{color:'red', fontSize:'1.2rem', fontWeight:'bolder'}}>US$49.00</span>
        </div>
        <button id="place-order-btn">Place Order</button>
    </section>)

}

export default BriefProductsLists;