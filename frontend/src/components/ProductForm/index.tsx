// Style sass/3_components/_productForm.scss

import { useState, useEffect } from 'react';

import ProductFormModalBox from './ProductFormModalBox';

import { postNewProduct, getProduct,  putProduct } from '../../utils/API';
import { NumberComma } from '../../utils/helpers';

interface productFormData {
    productId?: string;
}

const ProductForm: React.FC<productFormData> = ( {productId} ) => {
    const [productFormStatus, setProductFormStatus] = useState('POST');

    const [productFormTitle, setProductFormTitle] = useState('Add New Product');

    // To Store Product Data
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<string>('0');
    const [isPrice, setIsPrice] = useState<boolean>(false);
    const [salePrice, setSalePrice] = useState<string>('0');
    const [quantity, setQuantity] = useState<string>('0');
    const [sku, setSku] = useState<string>('');

    // Error Message
    const [errMessage, setErrMessage] = useState<string>('');

   //This for Categories buttons on Categories line
   const [categories, setCategories] = useState<string[] | undefined>(undefined);

    // Store blob img URLs from Local Document by URL.creatObjectURL()
   const [ uploadedImg, setUploadedImg ] = useState<string[]>([]);
   const [ imgAWSUrl, setImgAWSUrl ] = useState<string[]>([]);
   const [ thumbnailImgURL, setThumbnailImgURL] = useState<string>('');


    // Checking getting productId from Table then Display Edit Product
    useEffect(() => {
        if(productId){
            setProductFormTitle('Edit')
            getProductById(productId);
        }

        async function getProductById(productId: string) {
            setProductFormStatus('EDIT');

            // Get Product Data by product ID
            const seletedProduct = await getProduct(productId)
            // console.log(seletedProduct);
            let pageTitle = 'Edit: ' + seletedProduct.title;
            setProductFormTitle(pageTitle)
            setTitle(seletedProduct.title)
            setDescription(seletedProduct.description)
            setPrice(seletedProduct.price)
            setIsPrice(seletedProduct.onSale)
            setSalePrice(seletedProduct.salePrice)
            setQuantity(seletedProduct.quantity)
            setSku(seletedProduct.sku)
            setThumbnailImgURL(seletedProduct.thumbnailImgURL)
            setImgAWSUrl(seletedProduct.imgURLlists)
            setCategories(seletedProduct.categories)
            
            setUploadedImg(seletedProduct.imgURLlists);

            if(seletedProduct.onSale){
                const checkBox = document.getElementById('toggleCheckbox')!;
                const originalPrice = document.querySelector<HTMLElement>('.original-price')!;
                const salePrice = document.getElementById('sale-price')!;
                const toggleSlider = document.getElementById('toggle-slider')!;
                // const toggleSliderBefore = document.getElementById('toggle-slider::before')!;
                
                checkBox.dataset.check = 'checked';
                originalPrice.style.textDecoration = 'line-through';
                salePrice.style.display = 'flex';

                // Controll Variable in CSS in _toggleSwitch.scss
                toggleSlider.style.setProperty('--slider-background', 'black');
                toggleSlider.style.setProperty("--left-location", "16px");
            }
        }
    }, [productId])

    const checkBox = () =>{
        const checkBox = document.getElementById('toggleCheckbox')!;
        const originalPrice = document.querySelector<HTMLElement>('.original-price')!;
        const salePrice = document.getElementById('sale-price')!;
        const toggleSlider = document.getElementById('toggle-slider')!;

        if(checkBox.dataset.check === 'checked'){
            checkBox.dataset.check = '';
            originalPrice.style.textDecoration = '';
            salePrice.style.display = 'none';

            // Controll Variable in CSS in _toggleSwitch.scss
            toggleSlider.style.setProperty("--slider-background", "#ccc");
            toggleSlider.style.setProperty("--left-location", "1px");
        }else{
            checkBox.dataset.check = 'checked';
            originalPrice.style.textDecoration = 'line-through';
            salePrice.style.display = 'flex';

            // Controll Variable in CSS in _toggleSwitch.scss
            toggleSlider.style.setProperty("--slider-background", "black");
            toggleSlider.style.setProperty("--left-location", "16px");
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
    // Send new product data to Backend
    async function onClickSaveBtn() {
        // Post product data to Product DB.
        const response = await postNewProduct({
            'title': title,
            'description': description,
            'thumbnailImgURL': imgAWSUrl[0],
            'imgURLlists': imgAWSUrl,
            'price': price, 
            'onSale': isPrice,
            'salePrice': salePrice,
            'quantity': quantity,
            'sku': sku, 
            'categories': categories
        });
        console.log(response);
        const warningAddproductInputEl = document.getElementById('warning-addproduct-input')!;
        
        // Display Warning notice if there is no title.
        if(response.message){
            setErrMessage(response.message.split(":")[2])
            warningAddproductInputEl.style.opacity = '100%';
            setTimeout(()=>{
                warningAddproductInputEl.style.opacity = '0%';
            }, 3000);
        // Display Warning notice if there is the same SKU name which is already taken in DB.
        }else if(response.code === 11000){
            let skuErrMessage = "SKU: " + response.keyValue.sku + " is already taken."
            setErrMessage(skuErrMessage)
            warningAddproductInputEl.style.width = '100%';
            warningAddproductInputEl.style.opacity = '100%';
            setTimeout(()=>{
                warningAddproductInputEl.style.opacity = '0%';
            }, 3000);
        }else{
            window.location.reload();
        }
    }

    async function onClickUpdateBtn() {
        console.log('update');
        console.log(productId);
        const updatedProductData = {
            'title': title,
            'description': description,
            'thumbnailImgURL': imgAWSUrl[0],
            'imgURLlists': imgAWSUrl,
            'price': price, 
            'onSale': isPrice,
            'salePrice': salePrice,
            'quantity': quantity,
            'sku': sku, 
            'categories': categories
        }

        const response = await putProduct(productId!, updatedProductData);
        console.log(response);

        window.location.reload();
    }

    function onClickCancelBtn() {
        const modalEl = document.getElementById('productForm')!;
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
    const handleChange = async (event: any) => {
    // console.log(event.target.files);
    // URL.creatObjectURL() method takes an object (like our file) and 
    // creates a temporary local URL that is tied to the document in which it is created 
    // (meaning it won’t remember the URL if you leave the page and come back).
    // This URL can be used to set the the src property of a <img/> element
      const fileUploaded = [];
      const imageUrl = [];
      for(let i = 0; i < event.target.files.length; i++){
        fileUploaded.push(URL.createObjectURL(event.target.files[i])) // In files[i], there is image's URL of local location
        // console.log(URL.createObjectURL(event.target.files[i]));

        // Get S3-UploadUrl
        const s3UploadUrl = await s3GetUploadUrl();
        
        // Upload Img to AWS S3
        await fetch(s3UploadUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            body: event.target.files[i]
        })

        // Store imageUrl from AWS S3 ( to put imageUrl lists to product model )
        imageUrl.push(s3UploadUrl.split('?')[0])
      }

      setImgAWSUrl([...imgAWSUrl, ...imageUrl]);
      setUploadedImg([...uploadedImg, ...fileUploaded]);
    };

    const s3GetUploadUrl = async () =>{
        const urlRaw = await fetch("/api/aws/getFileUploadURL");
        const url = await urlRaw.json();
        return url;
    }

    return (
        <>
        <div className="card">
            <div className="card-header productForm-header">
                {productFormStatus === 'POST'?
                    <button onClick={onClickSaveBtn}>Save</button>
                    : <button onClick={onClickUpdateBtn}>Update</button>
                }
                <div>{productFormTitle}</div>
                <button onClick={onClickCancelBtn}>Cancel</button>
            </div>
            <div id="warning-addproduct-input">
                    <p>{errMessage}</p>
            </div>
            <div className="card-body productForm-body">
                <div className="productForm-body-item">
                    <input className="productForm-title" placeholder="Add Product Name" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="productForm-body-item">
                    <input className="productForm-description" placeholder="Add description..." value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="file" style={{"display": "none"}} id="upload-img-input" accept="image/gif, image/jpeg, image/png" multiple onChange={handleChange} />
                {uploadedImg.length === 0 ? 
                    <div className="productForm-body-item productForm-img-box">
                        <div className="productForm-img-border" onClick={handleClick}>
                            <div><i className="fas fa-upload"></i></div>
                            <div>ADD IMAGES</div>
                        </div>
                    </div>
                :<></>}
                {uploadedImg.length === 0 ? <></> :
                    <div id="multiple-image-upload">
                        {uploadedImg.map((img, index) => {
                            return (
                                <div className="dragTest"  data-draggable="true" key={index}>
                                    <img src={img} alt="uploaded-product" width="110px" height="110px" />
                                </div>
                            )
                        })}
                        {uploadedImg.length < 12?
                        <label className="file-upload-label" onClick={handleClick}>
                            <i className="fas fa-plus"></i>
                        </label>:<></>
                        }
                    </div>
                }
                <div className="productForm-body-item">
                    <p>Pricing</p>
                    <div className="productForm-body-item-body">
                        <div className="productForm-body-item-body-items">
                            <label>Price</label>
                            <input className="original-price" placeholder='$0.00' value={price} onChange={(e) => setPrice(e.target.value)} onFocus={focusOnPriceInput} onBlur={focusOutPriceInput} onKeyPress={handleInputeydown} />
                        </div>
                        <div className="productForm-body-item-body-items">
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
                                <span className="slider round" id="toggle-slider"></span>
                            </label>
                        </div>
                        <div className="productForm-body-item-body-items" id="sale-price">
                            <label>Sale Price</label>
                            <input placeholder='$0.00' value={salePrice} onFocus={focusOnPriceInput} onBlur={focusOutPriceInput} onKeyPress={handleInputeydown} onChange={(e) => setSalePrice(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div  className="productForm-body-item">
                    <p>Inventory</p>
                    <div className="productForm-body-item-body">
                        <div className="productForm-body-item-body-items">
                            <label>Quantity</label>
                            <input placeholder='0' type='number' min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                        <div className="productForm-body-item-body-items">
                            <label>SKU</label>
                            <input placeholder='360W001'  value={sku} onChange={(e) => setSku(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div  className="productForm-body-item">
                    <p>Categories</p>
                    <div className="productForm-body-item-body">
                        <div className="productForm-body-item-body-items productForm-body-item-body-items-last-child">
                            {categories? 
                                categories.map((category, index) => <p className="productForm-categories-item" key={index}>{category}</p>) :""
                            }
                            <button onClick={clickModalBtn}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {productFormStatus === 'EDIT' ?
        <ProductFormModalBox pullCategories={pullCategories} categoriesSeletedProduct={categories} />
        : <ProductFormModalBox pullCategories={pullCategories} />
        }
        {/* {productFormStatus === 'EDIT' ?
        console.log("Here : ", categories)
        : console.log(categories)
        } */}
        </>
    )
};

export default ProductForm;