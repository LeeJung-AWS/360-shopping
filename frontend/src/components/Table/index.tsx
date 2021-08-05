import React from 'react';
import { useState } from 'react';

import { NumberComma } from '../../utils/helpers';

import dummyProductImg from '../../assets/img/dummy-product-img.png';

interface TableData {
    tHeads: string[];
    tBodys: {"id": string, "img"?: string, "product": string, "stock": string, "price": string}[] | undefined; 
    onClickCheckInventory: (productId:string) => void
}

// TODO: Search Product by Product Tittle and Categories
// TODO: Use ellipsis for Product Title depending on Screen Size
// TODO: Sorting function


const Table: React.FC<TableData> = ({ tHeads, tBodys, onClickCheckInventory }) => {
    // const [ productIdArr, setProductIdArr ] = useState<string[]>([])
    // TODO: Display Delete Button when Check a product
    function onClickCheck(event: any) {
        // setProductIdArr([...productIdArr, event.target.dataset.id]);
        console.log(event.target.checked)
        onClickCheckInventory(event.target.dataset.id);
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
        <tbody>
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