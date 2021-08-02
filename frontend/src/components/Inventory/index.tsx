// Style : sass/3_components/_inventory.scss

import React from 'react';

import AddNewProduct from "../AddNewProduct";

const Inventory: React.FC = () => {
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
        <div id="inventory-top-menu" className="flex justify-content-center align-items-center p-1">
            <div></div>
            <div id="inventory-top-menu-title">
                Inventory
            </div>
            <div className="flex" id="add-product-btns">
                <div></div>
                <div></div>
                <div onClick={addProductOnClick} className="add-product-btn">
                    <div>
                        ADD_PRODUCT
                    </div>
                </div>
            </div>
        </div>
        <div className="modal" id="addNewProduct">
            <div className="modal-content" id="addNewProduct-content">
                <AddNewProduct />    
            </div>    
        </div>
    </>);
};

export default Inventory;