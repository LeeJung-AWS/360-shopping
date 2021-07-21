import { useState } from 'react';

import ModalBoxAdmin from './ModalBoxAdmin';

const AddNewProduct: React.FC = () => {
    const [addNewProductTitle, setAddNewProductTitle] = useState('');
    const [addNewProductDescription, setAddNewProductDescription] = useState('');

   //Dummy Data for Categories
   const [categories, setCategories] = useState(['Men', 'Clothing', 'Shirts']);

    const checkBox = () =>{
        const checkBox = document.getElementById('toggleCheckbox')!;
        const originalPrice = document.querySelector<HTMLElement>('.original-price')!;
        const salePrice = document.getElementById('sale-price')!;

        console.log(checkBox.dataset.check);
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

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.className === 'addNewProduct-title'){
            setAddNewProductTitle(e.target.value);
        }
        if(e.target.className === 'addNewProduct-description'){
            setAddNewProductDescription(e.target.value);
        }
    }

    function clickModalBtn() {
        const modalEl = document.getElementById('admin-modal')!;
        modalEl.style.display = 'block';
    }

    return (
        <>
        <div className="card">
            <div className="card-header addNewProduct-header">
                <button>Save</button>
                <div>Add New Product</div>
                <button>Cancel</button>
            </div>
            <div className="card-body addNewProduct-body">
                <div className="addNewProduct-body-item">
                    <input onChange={onChange} className="addNewProduct-title" placeholder="Add Product Name" value={addNewProductTitle} />
                </div>
                <div className="addNewProduct-body-item">
                    <input onChange={onChange} className="addNewProduct-description" placeholder="Add description..." value={addNewProductDescription} />
                </div>
                <div className="addNewProduct-body-item addNewProduct-img-box">
                    <div className="addNewProduct-img-border">
                        <div><i className="fas fa-upload"></i></div>
                        <div>ADD IMAGES</div>
                    </div>
                </div>
                <div className="addNewProduct-body-item">
                    <p>Pricing</p>
                    <div className="addNewProduct-body-item-body">
                        <div className="addNewProduct-body-item-body-items">
                            <label>Price</label>
                            <input className="original-price" placeholder='$0.00' />
                        </div>
                        <div className="addNewProduct-body-item-body-items">
                            <label>On Sale</label>
                            <label className="switch">
                                <input id="toggleCheckbox" type="checkbox" data-check="" onClick={checkBox} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="addNewProduct-body-item-body-items" id="sale-price">
                            <label>Sale Price</label>
                            <input placeholder='$0.00' />
                        </div>
                    </div>
                </div>
                <div  className="addNewProduct-body-item">
                    <p>Inventory</p>
                    <div className="addNewProduct-body-item-body">
                        <div className="addNewProduct-body-item-body-items">
                            <label>Quantity</label>
                            <input placeholder='0' type='number'/>
                        </div>
                        <div className="addNewProduct-body-item-body-items">
                            <label>SKU</label>
                            <input placeholder='SQ910011' />
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
        <ModalBoxAdmin />
        </>
    )
};

export default AddNewProduct;