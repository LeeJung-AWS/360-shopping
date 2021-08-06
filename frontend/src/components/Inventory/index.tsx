// Style : sass/3_components/_inventory.scss

import React from 'react';
import { useState, useEffect } from 'react';

import AddNewProduct from "../AddNewProduct";
import Table from '../Table';

interface productListDataDype{
    'id': string, 
    'productTitle': string, 
    'categories': string[], 
    'stock': string, 
    'price': string
}

const Inventory: React.FC = () => {

    const [ productList, setProductList] = useState<productListDataDype[] | undefined>(undefined);
    const [ filteredProductList, setFilteredProductList] = useState<productListDataDype[] | undefined>(undefined);

    const [ selectedProductId, setSelectedProductId] = useState<string[]>([]);
    // Display amount of seleted product when checking them.
    const [ amountOfSelectedProduct, setAmountOfSelectedProduct ] = useState(0);

    // TODO: Fetch productList from DB
    useEffect(() => {
        // Dummy Data
        const myProductlists = [
            {'id':'1', 'productTitle': 'myProduct01', 'categories': ['shirts', 'men'], 'stock': '1', 'price': '55'},
            {'id':'2', 'productTitle': 'myProduct02', 'categories': ['shirts', 'men'], 'stock': '5', 'price': '205'},
            {'id':'3', 'productTitle': 'myProduct03', 'categories': ['shirts', 'men'], 'stock': '3', 'price': '155'},
            {'id':'4', 'productTitle': 'myProduct04', 'categories': ['shirts', 'men'], 'stock': '2', 'price': '887'},
            {'id':'5', 'productTitle': 'myProduct05', 'categories': ['shirts', 'men'], 'stock': '1', 'price': '752'},
            {'id':'6', 'productTitle': 'myProduct06', 'categories': ['shirts', 'men'], 'stock': '2', 'price': '712'},
            {'id':'7', 'productTitle': 'myProduct07', 'categories': ['shirts', 'men'], 'stock': '5', 'price': '612'},
            {'id':'8', 'productTitle': 'myProduct08', 'categories': ['shirts', 'men'], 'stock': '2', 'price': '353'},
            {'id':'9', 'productTitle': 'myProduct09', 'categories': ['shirts', 'men'], 'stock': '1', 'price': '125'},
            {'id':'10', 'productTitle': 'myProduct10', 'categories': ['shirts', 'men'], 'stock': '2', 'price': '1005'},
            {'id':'11', 'productTitle': 'myProduct11', 'categories': ['shirts', 'men'], 'stock': '1', 'price': '25'},
            {'id':'12', 'productTitle': 'myProduct12', 'categories': ['shirts', 'men'], 'stock': '1', 'price': '254'},
            ]

        setProductList(myProductlists)
        setFilteredProductList(myProductlists)
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
    // Search Product by Product Title
    function handleInputChangeSearch(event: any){
        const value = event.target.value.trim();

        const originalProducts:productListDataDype[]|undefined= productList?[...productList]:[];
        
        setFilteredProductList(
            originalProducts.filter(product => {
                return(product.productTitle.toLowerCase().includes(value.toLowerCase()))
            })
        );
    }
    // TODO: Sorting function
    function sortingByTableHeader(header: string) {
        console.log(header);
    }

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
        // console.log(selectedProductId)
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
                    <input id="product-search-form" placeholder="Product Title" onChange={handleInputChangeSearch} />
                </form>
                <div onClick={addProductOnClick}>
                    ADD_PRODUCT
                </div>
            </div>
        </div>

        <Table tHeads={["","","","PRODUCT", "STOCK", "PRICE"]} tBodys={filteredProductList? filteredProductList: undefined} onClickCheckInventory={onClickCheckInventory} sortingByTableHeader={sortingByTableHeader} />
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