// ----------------------------------------------
// ---------------- AWS S3 API ---------------->

export const s3GetUploadUrl = async () =>{
    try{
        const urlRaw = await fetch("/api/aws/getFileUploadURL");
        const url = await urlRaw.json();
        return url;

    }catch(error){
        return error;
    }
};

export const s3UploadImg = async (s3UploadUrl: string,  file: string) =>{
    try{
        await fetch(s3UploadUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "multipart/form-data"
            },
            body: file
        });
    }catch(error){
        return error;
    }
};

export  const deleteS3Img = async (key: {key: string}) =>{
    const response = await fetch("/api/aws/deleteS3Img", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(key)
    });
    const response02 = await response.json();
    return response02;
}

// <---------------- AWS S3 API ----------------
// ----------------------------------------------

// ----------------------------------------------
// ---------------- User API ---------------->
// route to get logged in user's info (needs the token)
export const getMe = (token: string) => {
    return fetch('/api/user/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
};

export const createUser = (userData: any) => {
    return fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
};

export const loginUser = (userData: any) => {
    // console.log(userData);
    return fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
};


// <---------------- User API ----------------
// ----------------------------------------------


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
        const res = await fetch('/api/product/' + id)
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