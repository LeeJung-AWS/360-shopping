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
                    <div></div>
                    <div>ADD IMAGES</div>
                </div>
                <div className="addNewProduct-body-item">
                    <p>Pricing</p>
                    <div>Price</div>
                    <div>On Sale</div>
                    <div>Sale Price</div>
                </div>
                <div  className="addNewProduct-body-item">
                    <p>Inventory</p>
                    <div>Quantity</div>
                    <div>SKU</div>
                </div>
                <div  className="addNewProduct-body-item">
                    <p>Categories</p>
                    <button>Add...</button>
                </div>
            </div>
        </div>
    )
};

export default AddNewProduct;