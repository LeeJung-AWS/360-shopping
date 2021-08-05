import React from 'react';
// import { useState } from 'react';

import { NumberComma } from '../../utils/helpers';

import dummyProductImg from '../../assets/img/dummy-product-img.png';

interface TableData {
    tHeads: string[];
    tBodys: {"id": string, "img"?: string, "product": string, "stock": string, "price": string}[] | undefined; 
    onClickCheckInventory: (productId:string, isChecked:boolean) => void
}

// TODO: Search Product by Product Tittle and Categories
// TODO: Sorting function


const Table: React.FC<TableData> = ({ tHeads, tBodys, onClickCheckInventory }) => {

    // Pass selected product data to inventory element to handle Bar-menu ( About deleting Products )
    function onClickCheck(event: any) {
        // console.log(event.target);
        onClickCheckInventory(event.target.dataset.id, event.target.checked);
    }

    return(<>
    <table className="table-fixed">
    <colgroup>
        <col style={{width: '50px'}} />
        <col style={{width: '84px'}} />
        <col style={{width: '15px'}} />
        <col style={{width: 'auto', minWidth:'35px'}} />
        <col style={{width: '95px'}} />
        <col style={{width: '95px'}} />
    </colgroup>
        <thead>
            <tr>
                {tHeads.map((tHead, index) => {
                    return(
                        <th key={index} id={`${tHead.toLowerCase()}-tHead`}>{tHead}</th>
                    )
                })}
            </tr>
        </thead>
        <tbody id='product-list-table'>
            {tBodys? tBodys.map(tBody => {
                return(
                    <tr key={tBody.id}>
                        <td id="table-check-box">
                            <input type="checkbox" data-id={tBody.id} onClick={onClickCheck} />
                        </td>
                        <td>
                            <img src={tBody.img?tBody.img:dummyProductImg} alt={tBody.product} />
                        </td>
                        <td>
                            <div style={{width: '28px'}}></div>
                        </td>
                        <td id="product-table">
                            {tBody.product}
                        </td>
                        <td>
                            {tBody.stock}
                        </td>
                        <td id="price-table">
                            ${NumberComma(parseInt(tBody.price))}
                        </td>
                    </tr>
                )
            })
            : 
            <tr>
                <td style={{width: '28px'}}>
                    <input type="checkbox" style={{width: '42px'}} />
                </td>
                <td style={{width: '84px'}}>
                    <img src={dummyProductImg} alt='dummyImg' />
                </td>
                <td style={{width: '28px'}}>
                    <div style={{width: '28px'}}></div>
                </td>
                <td id="product-table">
                    No Product - Add your first Product
                </td>
                <td style={{width: '8rem'}}>
                   0
                </td>
                <td id="price-table" style={{width: '8rem'}}>
                    0.00
                </td>
            </tr>
            }
        </tbody>
    </table>
    </>)
}

export default Table;