// ----------------------------------------------
// ---------------- Product API ---------------->

export const getProducts = async () => {
    try{
        const res = await fetch('/api/product')
        return res.json();

    }catch(error){
        return error;
    }
};

export const getProduct = async (id: string) => {
    try{
        const res = await fetch('/api/products/' + id)
        return res.json();

    }catch(error){
        return error;
    }
};

export const postNewProduct = async (data = {}) => {
    try{
        const res = await fetch('/api/product', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"}
        })
        return res.json();

    }catch(error){
        return error;
    }
};

export const putProduct = async (id: string, data = {}) => {
    try{
        const res = await fetch('/api/product/' + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"}
        })
        return res.json();

    }catch(error){
        return error;
    }
};

export const deleteProduct = async (data: string[]) => {
    try{
        const res = await fetch('/api/product', {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"}
        })
        return res.json();
 
    }catch(error){
        return error;
    }
};

// <---------------- Product API ----------------
// ----------------------------------------------

// ----------------------------------------------
// ---------------- Category API ---------------->

export const getCategories = async () => {
    try{
        const res = await fetch('/api/category')
        return res.json();

    }catch(error){
        return error;
    }
};

export const addCategory = async (data = {}) => {
    try{
        const res = await fetch('/api/category', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"}
        })
        return res.json();

    }catch(error){
        return error;
    }
};

export const updateCategory = async (name: string, data = {}) => {
    try{
        const res = await fetch('/api/category/' + name, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"}
        })
        return res.json();

    }catch(error){
        return error;
    }
};

export const deleteCategory = async (name: string) => {
    try{
        const res = await fetch('/api/category/' + name, {
            method: "DELETE"
        })
        return res.json();
 
    }catch(error){
        return error;
    }
};

// <---------------- Category API ----------------
// ----------------------------------------------