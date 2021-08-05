// Style : sass/3_components/_inventory.scss

import React from 'react';
import { useState, useEffect } from 'react';

import AddNewProduct from "../AddNewProduct";
import Table from '../Table';

const Inventory: React.FC = () => {

    const [ productList, setProductList] = useState<{'id': string, 'product': string, 'stock': string, 'price': string}[] | undefined>(undefined);
    
    const [ selectedProductId, setSelectedProductId] = useState<string[]>([]);
    // Display amount of seleted product when checking them.
    const [ amountOfSelectedProduct, setAmountOfSelectedProduct ] = useState(0);

    // TODO: Fetch productList from DB
    useEffect(() => {
        // Dummy Data
        setProductList([
        {'id':'1', 'product': 'myProduct01myProduct01myProduct01myProduct01myProduct01myProduct01myProduct01', 'stock': '1', 'price': '55'},
        {'id':'2', 'product': 'myProduct02', 'stock': '5', 'price': '205'},
        {'id':'3', 'product': 'myProduct03', 'stock': '3', 'price': '155'},
        {'id':'4', 'product': 'myProduct04', 'stock': '2', 'price': '887'},
        {'id':'5', 'product': 'myProduct05', 'stock': '1', 'price': '752'},
        {'id':'6', 'product': 'myProduct06', 'stock': '2', 'price': '712'},
        {'id':'7', 'product': 'myProduct07', 'stock': '5', 'price': '612'},
        {'id':'8', 'product': 'myProduct08', 'stock': '2', 'price': '353'},
        {'id':'9', 'product': 'myProduct09', 'stock': '1', 'price': '125'},
        {'id':'10', 'product': 'myProduct10', 'stock': '2', 'price': '1005'},
        {'id':'11', 'product': 'myProduct11', 'stock': '1', 'price': '25'},
        {'id':'12', 'product': 'myProduct12', 'stock': '1', 'price': '254'},

    ])
    }, [])

    function addProductOnClick() {
        const addNewProductEl = document.getElementById('addNewProduct')!;
        addNewProductEl.style.display = 'block';
        addNewProductEl.style.padding = '10px';

        const addNewProductContentEl = document.getElementById('addNewProduct-content')!;
        addNewProductContentEl.style.width = '90%';
        addNewProductContentEl.style.height = '100%';
        addNewProductContentEl.style.padding = '0';

        let addNewProductContentChildNodeEl = addNewProductContentEl.firstChild as HTMLElement;
        addNewProductContentChildNodeEl.style.margin = '0';

        // block Scrollable Body
        document.body.style.overflowY = 'hidden';

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event: any) {
        if (event.target === addNewProductEl) {
            addNewProductEl.style.display = "none";

            // Active Scrollable Body
            document.body.style.overflowY = 'auto';
        }
      }
    }
    // TODO: Search Product by Product Tittle and Categories
    // TODO: Sorting function

    // Display Delete Button when Check a product
    function onClickCheckInventory(productId: string, isChecked: boolean) {
        const barMenuInventoryEl = document.getElementById('bar-menu-inventory')!;
        let amount = amountOfSelectedProduct;
        let productIdArr = selectedProductId;

        if(isChecked){
            if(amount === 0){
                barMenuInventoryEl.style.display = 'flex';
            }
            amount++;
            productIdArr.push(productId);
        }else{
            if(amount === 1) {
                barMenuInventoryEl.style.display = 'none';
            }
            amount--;
            productIdArr.splice(productIdArr.indexOf(productId), 1);
        }

        setSelectedProductId(productIdArr);
        setAmountOfSelectedProduct(amount);
        console.log(selectedProductId)
    } 

     // All check products on the table
     function allCheckproduct() {
        let productIdArr = [];
        let amount = 0;
        const productListTableEl = document.getElementById('product-list-table') as any;
        const trArray = productListTableEl.children;

        for(let i = 0; i < trArray.length; i++){
            let tr:any = trArray[i];
            
            let checkbox = tr.firstChild?.firstChild
            // console.log(checkbox);
            if(checkbox){
                checkbox.checked = true;
                productIdArr.push(checkbox.dataset.id);
                amount++;
            }
        }
        // console.log(productIdArr);
        setSelectedProductId(productIdArr);
        setAmountOfSelectedProduct(amount);
     }

     // All uncheck products on the table
     function allUncheckproduct() {
        const productListTableEl = document.getElementById('product-list-table') as any;
        const trArray = productListTableEl.children;

        for(let i = 0; i < trArray.length; i++){
            let tr:any = trArray[i];
            
            let checkbox = tr.firstChild?.firstChild
            // console.log(checkbox);
            if(checkbox){
                checkbox.checked = false;
            }
        }
        
        const barMenuInventoryEl = document.getElementById('bar-menu-inventory')!;
        barMenuInventoryEl.style.display = 'none';
        // console.log(productIdArr);
        setSelectedProductId([]);
        setAmountOfSelectedProduct(0);
     }

    return (<>
        <div className="flex align-items-center m-1" id="inventory-top-menu">
            <span id="inventory-title">Inventory</span>
            <div id="inventory-menu-btn">
                <form>
                    <i className="fas fa-search"></i>
                    <input id="product-search-form" placeholder="Products, Categories" />
                </form>
                <div onClick={addProductOnClick}>
                    ADD_PRODUCT
                </div>
            </div>
        </div>

        <Table tHeads={["","","","PRODUCT", "STOCK", "PRICE"]} tBodys={productList? productList: undefined} onClickCheckInventory={onClickCheckInventory} />
        <div className="modal" id="addNewProduct">
            <div className="modal-content" id="addNewProduct-content">
                <AddNewProduct />    
            </div>    
        </div>
        <div id="bar-menu-inventory">
            <div id="bar-menu-inventory-select-btn">
                <button onClick={allCheckproduct}>Select All</button>
                <button onClick={allUncheckproduct}>Clear Selection</button>
            </div>
            <div>{amountOfSelectedProduct} Selected</div>
            <div id="bar-menu-inventory-delete-btn">
                <button>Delete</button>
            </div>
        </div>
    </>);
};

export default Inventory;