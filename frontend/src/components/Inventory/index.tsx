// Style : sass/3_components/_inventory.scss

import React from 'react';
import { useState, useEffect } from 'react';

import AddNewProduct from "../AddNewProduct";
import Table from '../Table';

import { getProducts, deleteProduct } from "../../utils/API";

interface productListDataDype{
    '_id': string, 
    'title': string, 
    'categories': string[], 
    'quantity': string, 
    'price': string
}

const Inventory: React.FC = () => {

    const [ productList, setProductList] = useState<productListDataDype[] | undefined>(undefined);
    const [ filteredProductList, setFilteredProductList] = useState<productListDataDype[] | undefined>(undefined);

    const [ selectedProductId, setSelectedProductId] = useState<string[]>([]);
    // Display amount of seleted product when checking them.
    const [ amountOfSelectedProduct, setAmountOfSelectedProduct ] = useState(0);
    const [ sortingStatus, setSortingStatus ] = useState<{'PRODUCT': string, 'STOCK': string, 'PRICE': string}>({
        'PRODUCT': 'descending', 
        'STOCK': 'descending', 
        'PRICE': 'descending'
    })

    // Fetch productList from DB
    async function getAllProducts() {
        const productsLists = await getProducts();
        // console.log(productsLists);
        setProductList(productsLists)
        setFilteredProductList(productsLists)
    }

    useEffect(() => {
        getAllProducts();
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
                return(product.title.toLowerCase().includes(value.toLowerCase()))
            })
        );
    }
    // Sorting function
    function sortingByTableHeader(header: string) {
        const originalProducts:productListDataDype[]|undefined= productList?[...productList]:[];

        if(header === "PRODUCT"){
            // console.log(sortingStatus);
            if(sortingStatus[header] === "descending"){
                setSortingStatus({...sortingStatus, "PRODUCT": "ascending"});
                // Ascending
                setFilteredProductList(originalProducts.sort((a, b) => (a.title > b.title) ? 1 : -1));
                setProductList(originalProducts.sort((a, b) => (a.title > b.title) ? 1 : -1));
            }else{
                setSortingStatus({...sortingStatus, "PRODUCT": "descending"});
                // Descending
                setFilteredProductList(originalProducts.sort((a, b) => (a.title > b.title) ? -1 : 1));
                setProductList(originalProducts.sort((a, b) => (a.title > b.title) ? -1 : 1));
            }
        }else if(header === "STOCK"){
            if(sortingStatus[header] === "descending"){
                setSortingStatus({...sortingStatus, "STOCK": "ascending"});
                // Ascending
                setFilteredProductList(originalProducts.sort((a:any, b:any) => a.quantity - b.quantity));
                setProductList(originalProducts.sort((a:any, b:any) => a.quantity - b.quantity));
            }else{
                setSortingStatus({...sortingStatus, "STOCK": "descending"});
                // Descending
                setFilteredProductList(originalProducts.sort((a:any, b:any) => b.quantity - a.quantity));
                setProductList(originalProducts.sort((a:any, b:any) => b.quantity - a.quantity));
            }

        }else if(header === "PRICE"){
            // console.log(sortingStatus);
            if(sortingStatus[header] === "descending"){
                setSortingStatus({...sortingStatus, "PRICE": "ascending"});
                // Ascending
                setFilteredProductList(originalProducts.sort((a:any, b:any) => a.price - b.price));
                setProductList(originalProducts.sort((a:any, b:any) => a.price - b.price));

            }else{
                setSortingStatus({...sortingStatus, "PRICE": "descending"});
                // Descending
                setFilteredProductList(originalProducts.sort((a:any, b:any) => b.price - a.price));
                setProductList(originalProducts.sort((a:any, b:any) => b.price - a.price));
            }


        }
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

     function productDeleteBtn() {
        //  selectedProductId <== Array Type
        console.log(selectedProductId);
        deleteProduct(selectedProductId);

        window.location.reload();
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

        <Table tHeads={["","","","PRODUCT", "STOCK", "PRICE"]} tBodys={filteredProductList? (filteredProductList.length > 0 ? filteredProductList : undefined): undefined} onClickCheckInventory={onClickCheckInventory} sortingByTableHeader={sortingByTableHeader} />
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
                <button onClick={productDeleteBtn}>Delete</button>
            </div>
        </div>
    </>);
};

export default Inventory;