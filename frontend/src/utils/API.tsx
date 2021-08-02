// ----------------------------------------------
// ---------------- Product API ---------------->

export const getProducts = () => {
    console.log("Get all products");
    // return fetch('/api/products')
};

export const getProduct = (productId: String) => {
    console.log("Get a product by ID ", productId);
    // return fetch('/api/products/${productId}')
};

export const getProductsbyCategory = (categoryID: String) => {
    console.log("Get a product by category id ", categoryID);
    // return fetch('/api/products/${categoryID}')
};

export const postNewProduct = (productData: Object) => {
    console.log("Add new Product : ", productData);
    // return fetch('/api/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(productData),
    // });
};

export const putProduct = (productId: String, productData: Object) => {
    console.log("updateProduct a Product by Id, ", productId);
    console.log('Updated Product Information ', productData)
    // return fetch(`/api/products/${productId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(productData),
    // });
};

export const deleteProduct = (productId: String) => {
    console.log("Delete a Product by Id, ", productId);
    // return fetch(`/api/products/${productId}`, {
    //   method: 'DELETE'
    // });
};

// <---------------- Product API ----------------
// ----------------------------------------------