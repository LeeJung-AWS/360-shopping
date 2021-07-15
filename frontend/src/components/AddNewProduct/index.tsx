const AddNewProduct: React.FC = () => {

    return (
        <div className="card">
            <div className="card-header addNewProduct-header">
                <button>Save</button>
                <div>Add New Product</div>
                <button>Cancel</button>
            </div>
            <div className="card-body addNewProduct-body">
                <div className="addNewProduct-title">Add Product Name</div>
                <div className="addNewProduct-title">Add description...</div>
                <div>IMG BLOCK</div>
                <div>Pricing</div>
                <div>Inventory</div>
                <div>Categories</div>
            </div>
        </div>
    )
};

export default AddNewProduct;