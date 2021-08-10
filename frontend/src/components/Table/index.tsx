import React from 'react';
import { useState } from 'react';

import { NumberComma } from '../../utils/helpers';

import dummyProductImg from '../../assets/img/dummy-product-img.png';

interface TableData {
    tHeads: string[];
    tBodys: {"_id": string, "imgURL"?: string, "title": string,'categories': string[], "quantity": string, "price": string}[] | undefined; 
    onClickCheckInventory: (productId:string, isChecked:boolean) => void;
    sortingByTableHeader: (header:string) => void;
}


const Table: React.FC<TableData> = ({ tHeads, tBodys, onClickCheckInventory, sortingByTableHeader }) => {
    const [ currentNodeState, setCurrentNodeState ] = useState(undefined);

    // Pass selected product data to inventory element to handle Bar-menu ( About deleting Products )
    function onClickCheck(event: any) {
        // console.log(event.target);
        onClickCheckInventory(event.target.dataset.id, event.target.checked);
    }


    // Sorting function
    function onClickHeader(event: any){
        let beforeNode:HTMLInputElement|any = currentNodeState;
        let currentNode = event.target;
        // console.log(currentNode === beforeNode);
        if(beforeNode){
            // console.log(beforeNode);
            // console.log(typeof beforeNode);
            beforeNode.style.color = 'rgb(230, 230, 230)';
            beforeNode.style.display = '';
        }
        
        if(event.target.textContent ==='PRODUCT'){
            // console.log(event.target.parentNode.childNodes[1].childNodes)
            currentNode = event.target.parentNode.childNodes[1].childNodes[0];

            currentNode.style.color = "black"
            currentNode.style.display = 'inline'
        }else{
            currentNode = event.target.parentNode.childNodes[0].childNodes[0]
            currentNode.style.color = "black"
            currentNode.style.display = 'inline'
        }
        // event.target.style.color = 'black';
        // console.log(event.target.textContent)
        sortingByTableHeader(event.target.textContent)
        setCurrentNodeState(currentNode);
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
                        <th key={index} id={`${tHead.toLowerCase()}-tHead`} className="table-header">
                            {index < 4? <div className="flex" style={{height:"30px"}}>
                                <div style={{marginRight:"5px"}} onClick={onClickHeader} className="table-header-title">{tHead}</div>
                                <div><i className="fas fa-sort table-header-icon"></i></div>
                            </div> 
                            :
                            <div className="flex justify-content-end" style={{height:"30px"}}>
                                <div style={{marginRight:"5px"}}><i className="fas fa-sort table-header-icon"></i></div>
                                <div style={{marginRight:"30px"}} onClick={onClickHeader} className="table-header-title">{tHead}</div>
                            </div> }
                            
                        </th>
                    )
                })}
            </tr>
        </thead>
        <tbody id='product-list-table'>
            {/* {console.log(tBodys.length)} */}
            {tBodys? tBodys.map(tBody => {
                return(
                    <tr data-id={tBody._id} key={tBody._id}>
                        <td id="table-check-box">
                            <input type="checkbox" data-id={tBody._id} onClick={onClickCheck} />
                        </td>
                        <td>
                            <img src={tBody.imgURL?tBody.imgURL:dummyProductImg} alt={tBody.title} />
                        </td>
                        <td>
                            <div style={{width: '28px'}}></div>
                        </td>
                        <td id="product-table">
                            {tBody.title}
                        </td>
                        <td>
                            {tBody.quantity}
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

            {/* To create margin on the bottom of Table */}
            <tr style={{height: "84px"}}>
            </tr>
        </tbody>
    </table>
    </>)
}

export default Table;