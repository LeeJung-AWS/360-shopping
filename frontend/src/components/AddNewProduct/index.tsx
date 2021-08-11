// Style sass/3_components/_addNewProduct.scss

import { useState, useRef } from 'react';

import ModalBoxAdmin from './ModalBoxAdmin';

import { postNewProduct } from '../../utils/API';
import { NumberComma } from '../../utils/helpers';

const AddNewProduct: React.FC = () => {
    // To Store Product Data
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('0');
    const [isPrice, setIsPrice] = useState<boolean>(false);
    const [salePrice, setSalePrice] = useState<string>('0');
    const [quantity, setQuantity] = useState<string>('0');
    const [sku, setSku] = useState<string>('');

   //This for Categories buttons on Categories line
   const [categories, setCategories] = useState<string[] | undefined>(undefined);

    // TODO: Set up AWS S3 to store IMGs


    const checkBox = () =>{
        const checkBox = document.getElementById('toggleCheckbox')!;
        const originalPrice = document.querySelector<HTMLElement>('.original-price')!;
        const salePrice = document.getElementById('sale-price')!;

        // console.log(checkBox.dataset.check);
        if(checkBox.dataset.check === 'checked'){
            checkBox.dataset.check = '';
            originalPrice.style.textDecoration = '';
            salePrice.style.display = 'none';
        }else{
            checkBox.dataset.check = 'checked';
            originalPrice.style.textDecoration = 'line-through';
            salePrice.style.display = 'flex';
        }
    }

    function clickModalBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'block';
        
        // block Scrollable Body
        document.body.style.overflowY = 'hidden';

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event: any) {
        if (event.target === modalEl) {
            modalEl.style.display = "none";

            // Active Scrollable Body
            document.body.style.overflowY = 'auto';
        }
      }
    }

    

    // Set categories states after pulling status of categories from Modal ( checked or unchecked Categories )
    // When categories are checked in ModalBox, then update the categories into setCategories State.
    function pullCategories(pullCategories: string, checked: boolean) {
        // console.log(pullCategories);
        if(checked){
            //Add checked Category in categories state
            categories ? setCategories([...categories, pullCategories]) : setCategories([pullCategories]);
        }else{
            if(categories !== undefined){
                //Remove unchecked Category from categories state
                let tempArr:string[] = categories!; // Use ! because categories has always value inside else statement
                let removedIndex:number = tempArr.indexOf(pullCategories);
    
                // If the category in categories state, then Remove the Category Btn.
                if(removedIndex > -1){
                    tempArr.splice(removedIndex, 1);
                    // set Categories state with new lists ( it is a trigger to rerender this component )
                    setCategories([...tempArr]);
                }
            }

        }
    }

    // When click a input, 
    function focusOnPriceInput(event: any){
        // Remove $ sign at front of the price
        let tempStr = event.target.value;
        event.target.value = tempStr.slice(1, event.target.value.length);

        // Select all value at once.
        event.target.select();
    }

    // When Focusing out on Price Input, then Add $ sign at front and Put comma (Formatting Number)
    function focusOutPriceInput(event: any){
        event.target.value = '$'+ NumberComma(event.target.value);
    }

    // To block inputting characters for Price input element.
    // TODO: Block input more than two dot(.) , if inputting second dot(.) move the cursor to end of the input element.
    function handleInputeydown(event: any) {
        if(['1','2','3','4','5','6','7','8','9','0','.'].indexOf(event.key) !== -1){
            // console.log(event.target.value);
        }else{
            event.preventDefault();
        }
    }

    // When clicking Save, then take all information of product and post the infomation in DB(Products).
    // TODO: Make ADD btn Inactive until recieving all data 
    // TODO: When clicking cancel, Display Warning, if yes, go to Main of Admin Page, if No, keeping the page.
    // Send new product data to Backend
    function onClickSaveBtn() {
        // Post product data to Product DB. 
        postNewProduct({
            'title': title,
            'description': description,
            'price': price, 
            'onSale': isPrice,
            'salePrice': salePrice,
            'quantity': quantity,
            'sku': sku, 
            'categories': categories
        });

        window.location.reload();
        
    }

    function onClickCancelBtn() {
        const modalEl = document.getElementById('addNewProduct')!;
        modalEl.style.display = "none";

        // Active Scrollable Body
        document.body.style.overflowY = 'auto';

        window.location.reload();
    }

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = () => {
        // hiddenFileInput.current.click();
        const uploadImgEl = document.getElementById('upload-img-input')!;
        uploadImgEl.click();
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    const handleChange = (event: any) => {
      const fileUploaded = event.target.files[0];
      console.log(fileUploaded);
    };

    return (
        <>
        <div className="card">
            <div className="card-header addNewProduct-header">
                <button onClick={onClickSaveBtn}>Save</button>
                <div>Add New Product</div>
                <button onClick={onClickCancelBtn}>Cancel</button>
            </div>
            <div className="card-body addNewProduct-body">
                <div className="addNewProduct-body-item">
                    <input className="addNewProduct-title" placeholder="Add Product Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="addNewProduct-body-item">
                    <input className="addNewProduct-description" placeholder="Add description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="addNewProduct-body-item addNewProduct-img-box">
                    <div className="addNewProduct-img-border" onClick={handleClick}>
                        <input type="file" style={{"display": "none"}} id="upload-img-input" onChange={handleChange} />
                        <div><i className="fas fa-upload"></i></div>
                        <div>ADD IMAGES</div>
                    </div>
                </div>
                <div id="multiple-image-upload">
                    <div className="dragTest" data-draggable="true">
                        <img src="https://img.ltwebstatic.com/images3_pi/2021/07/02/16252200307d3f3d099403e9e38a725fc0f62720b7.webp" alt="uploaded-product" width="110px" height="110px" />
                    </div>
                    <div className="dragTest"  data-draggable="true"></div>
                    <div className="dragTest"  data-draggable="true"></div>
                    {/* <div className="dragTest" data-draggable="true"></div>
                    <div className="dragTest"  data-draggable="true"></div>
                    <div className="dragTest"  data-draggable="true"></div>
                    <div className="dragTest"  data-draggable="true"></div> */}
                    <label htmlFor="productFileUpload" className="file-upload-label">
                        <i className="fas fa-plus"></i>
                        <input id="productFileUpload" style={{"display": "none"}} accept="image/gif, image/jpeg, image/png" type="file" multiple />
                    </label>
                </div>
                <div className="addNewProduct-body-item">
                    <p>Pricing</p>
                    <div className="addNewProduct-body-item-body">
                        <div className="addNewProduct-body-item-body-items">
                            <label>Price</label>
                            <input className="original-price" placeholder='$0.00' onChange={(e) => setPrice(e.target.value)} onFocus={focusOnPriceInput} onBlur={focusOutPriceInput} onKeyPress={handleInputeydown} />
                        </div>
                        <div className="addNewProduct-body-item-body-items">
                            <label>On Sale</label>
                            <label className="switch">
                                <input id="toggleCheckbox" type="checkbox" data-check="" onClick={checkBox} onChange={(e) => {
                                    
                                    if(e.target.dataset.check === "checked"){
                                        setIsPrice(true);
                                    }else{
                                        setIsPrice(false);
                                    }
                                    }
                                } />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="addNewProduct-body-item-body-items" id="sale-price">
                            <label>Sale Price</label>
                            <input placeholder='$0.00' onFocus={focusOnPriceInput} onBlur={focusOutPriceInput} onKeyPress={handleInputeydown} onChange={(e) => setSalePrice(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div  className="addNewProduct-body-item">
                    <p>Inventory</p>
                    <div className="addNewProduct-body-item-body">
                        <div className="addNewProduct-body-item-body-items">
                            <label>Quantity</label>
                            <input placeholder='0' type='number' min="0" onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                        <div className="addNewProduct-body-item-body-items">
                            <label>SKU</label>
                            <input placeholder='360W001'  onChange={(e) => setSku(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div  className="addNewProduct-body-item">
                    <p>Categories</p>
                    <div className="addNewProduct-body-item-body">
                        <div className="addNewProduct-body-item-body-items addNewProduct-body-item-body-items-last-child">
                            {categories? 
                                categories.map((category, index) => <p className="addNewProduct-categories-item" key={index}>{category}</p>) :""
                            }
                            <button onClick={clickModalBtn}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalBoxAdmin pullCategories={pullCategories} />
        </>
    )
};

export default AddNewProduct;