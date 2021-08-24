import React, { useState } from 'react';

interface userFormDataType {
    'username': string 
    'password': string
    'confirmpassword': string
    'email': string
}

const SignUp: React.FC = () => { 
    const [userFormData, setUserFormData] = useState<userFormDataType>({'username': '', 'password': '', 'confirmpassword':'', 'email': ''}); 
    // const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const focusOut = () =>{
        const registerbtnEl = document.getElementById("register-btn") as HTMLInputElement;

        // Validate SignUp information - email type, password
        if(userFormData.password === userFormData.confirmpassword){
            console.log('correct')
            
            registerbtnEl.disabled = false;
        }else{
            registerbtnEl.disabled = true;
        }
    }
    
    const signUpSubmit = async (event: any) =>{
        event.preventDefault();

        console.log(userFormData)

    }
    return(
        <div id="signUp">
            <h3 id="title-signUp">New to 360-Shopping</h3>
            <form onSubmit={signUpSubmit}> 
                <label className="custom-margin-signIn-register">User name:</label>
                <input name="username" type="text" onChange={handleInputChange}/>
                <div id="caution-username" >
                    <span style={{ "color": "red" }}>User name required</span>
                </div>
                <label className="custom-margin-signIn-register">Email Address:</label>
                <input name="email" type="text" id="signUp-email" onChange={handleInputChange} />
                <div id="caution-email-validation">
                    <span style={{ "color": "red", "marginBottom": "3px" }}>The email you entered is invalid.</span>
                    <span style={{ "color": "red" }}>Please check your email and try again.</span>
                </div>
                <label className="custom-margin-signIn-register">Password:</label>
                <input name="password" type="password" id="signUp-password" onChange={handleInputChange} />
                <div id="caution-password">
                    <span>* 8 characters minimum</span>
                    <span>* At least one special character</span>
                    <span>* At least one number</span>
                    <span>* At least one lowercase letter</span>
                </div>
                <label className="custom-margin-signIn-register">Confirm Password:</label>
                <input name="confirmpassword" type="password" id="confirm-password" onChange={handleInputChange} onBlur={focusOut} />
                <div id="caution-confirm-password" >
                    <span style={{ "color": "red" }}>Your passwords do not match, please try again.</span>
                </div>
                <button type="submit" className="custom-margin-signIn-register submit" id="register-btn" disabled >REGISTER</button>
            </form>
        </div>
    )
}

export default SignUp;