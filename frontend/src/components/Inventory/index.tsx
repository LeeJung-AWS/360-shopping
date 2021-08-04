// Style : sass/3_components/_inventory.scss

import React from 'react';
import { useState, useEffect } from 'react';

import AddNewProduct from "../AddNewProduct";
import Table from '../Table';

const Inventory: React.FC = () => {

    const [ productList, setProductList] = useState<{'id': string, 'product': string, 'stock': string, 'price': string}[] | undefined>(undefined);

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

        <Table tHeads={["","","","PRODUCT", "STOCK", "PRICE"]} tBodys={productList? productList: undefined} />
        <div className="modal" id="addNewProduct">
            <div className="modal-content" id="addNewProduct-content">
                <AddNewProduct />    
            </div>    
        </div>
    </>);
};

export default Inventory;