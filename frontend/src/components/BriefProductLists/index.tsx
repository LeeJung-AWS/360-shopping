// Style: sass/components/_briefProductLists.scss

import React from 'react';

const BriefProductsLists: React.FC = () => {
    return (<section className="container-box product-list">
        <div className="product-list-body">
            <div className="">
                <img src="https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping08.png" width="100px" height="125px" alt="product" />
            </div>
            <div className="product-list-body-info">
                <div className="product-list-body-info-title">TITLE</div>
                <div className="product-list-body-info-unitprice">
                    <div>US$17.00</div>
                    <div className="product-list-body-info-unitprice-icon"><i className="far fa-trash-alt"></i></div>
                </div>
                <div className="product-list-body-info-quantity-btn">
                    <div>
                        <button className="product-list-body-info-quantity-btn-left">-</button>
                            <span className="product-list-body-info-quantity-btn-center">3</span>
                        <button className="product-list-body-info-quantity-btn-right">+</button>
                    </div>
                    <div>Total: <b>US$34.00</b></div>
                </div>
            </div>
        </div>

        {/* <div className="myHr"></div> */}

        <div className="product-list-body">
            <div className="">
                <img src="https://360shopping.s3.us-west-2.amazonaws.com/product-img/360shopping08.png" width="100px" height="125px" alt="product" />
            </div>
            <div className="product-list-body-info">
                <div className="product-list-body-info-title">TITLE</div>
                <div className="product-list-body-info-unitprice">
                    <div>US$17.00</div>
                    <div className="product-list-body-info-unitprice-icon"><i className="far fa-trash-alt"></i></div>
                </div>
                <div className="product-list-body-info-quantity-btn">
                    <div>
                        <button className="product-list-body-info-quantity-btn-left">-</button>
                            <span className="product-list-body-info-quantity-btn-center">3</span>
                        <button className="product-list-body-info-quantity-btn-right">+</button>
                    </div>
                    <div>Total: <b>US$34.00</b></div>
                </div>
            </div>
        </div>

        {/* <div className="myHr"></div> */}
        <div className="total-price">
                Total: <span style={{color:'red', fontSize:'1.2rem', fontWeight:'bolder'}}>US$49.00</span>
        </div>
        <button id="place-order-btn">Place Order</button>
    </section>)

}

export default BriefProductsLists;