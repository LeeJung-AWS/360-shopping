import { useState } from 'react';

const AddNewProduct: React.FC = () => {
    const [addNewProductTitle, setAddNewProductTitle] = useState('');
    const [addNewProductDescription, setAddNewProductDescription] = useState('');

    // const onFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.className)
    //     if(e.target.className === 'addNewProduct-title' && addNewProductTitle === 'Add Product Name'){
    //         setAddNewProductTitle('');
    //     }

    //     if(e.target.className === 'addNewProduct-description' && addNewProductDescription === 'Add description...'){
    //         setAddNewProductDescription('');
    //     }
    // }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.className === 'addNewProduct-title'){
            setAddNewProductTitle(e.target.value);
        }
        if(e.target.className === 'addNewProduct-description'){
            setAddNewProductDescription(e.target.value);
        }
    }

    return (
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
                            <input placeholder='$0.00' />
                        </div>
                        <div className="addNewProduct-body-item-body-items">
                            <label>On Sale</label>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="addNewProduct-body-item-body-items">
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
                        <div className="addNewProduct-body-item-body-items">
                            <button>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddNewProduct;