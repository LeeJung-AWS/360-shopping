import React from 'react';

import { NumberComma } from '../../utils/helpers';

import dummyProductImg from '../../assets/img/dummy-product-img.png';

interface TableData {
    tHeads: string[];
    tBodys: {"id": string, "img"?: string, "product": string, "stock": string, "price": string}[] | undefined; 
}
// TODO: Display Delete Button when Check a product
// TODO: Search Product by Product Tittle and Categories
// TODO: Use ellipsis for Product Title depending on Screen Size
// TODO: Sorting function

const Table: React.FC<TableData> = ({ tHeads, tBodys }) => {
    return(<>
    <table>
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
                        <td style={{width: '28px', padding:'0 12px'}} id="table-check-box">
                            <input type="checkbox" />
                        </td>
                        <td style={{width: '84px'}}>
                            <img src={tBody.img?tBody.img:dummyProductImg} alt={tBody.product} />
                        </td>
                        <td style={{width: '28px'}}>
                            <div style={{width: '28px'}}></div>
                        </td>
                        <td style={{width: '500px'}} id="product-table">
                            {tBody.product}
                        </td>
                        <td style={{width: '8rem'}}>
                            {tBody.stock}
                        </td>
                        <td id="price-table" style={{width: '8rem'}}>
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