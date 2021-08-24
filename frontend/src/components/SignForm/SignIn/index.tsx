import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { loginUser } from "../../../utils/API";
import Auth from '../../../utils/auth';

const SignIn: React.FC = () => { 
    const [userFormData, setUserFormData] = useState({ username: '', password: '' }); 
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const signInFunc = async (event: any) =>{
        event.preventDefault();
        console.log(userFormData);
        console.log("sign in form")
        try {
            const response = await loginUser(userFormData);
      
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
      
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
          } catch (err) {
            console.error(err);
            setShowAlert(true);
          }
      
          setUserFormData({
            username: '',
            password: '',
          });
    }

    return(
        <div id="signIn">
            <h3 id="title-signIn">Sign In</h3>
            <form onSubmit={signInFunc}>
                {showAlert ? <div>Something went wrong with your login credentials!</div>: <></>}
                <label className="custom-margin-signIn-register">User Name:</label>
                <input type="text" id="fname" name="username" onChange={handleInputChange} required />
                <label className="custom-margin-signIn-register">Password:</label>
                <input type="password" id="lname" name="password" onChange={handleInputChange} required />
                <button type="submit" value="SIGN IN" className="custom-margin-signIn-register submit">SIGN IN</button>
            </form>
            <Link to="#" className="custom-margin-signIn-register" id="forgot-password">Forgot Your Password?</Link>
            <div id="divider-authentication">
                <div className="myHr"></div>
                <span className="custom-Or">or</span>
                <div className="myHr"></div>
            </div>
        </div>
    )
}

export default SignIn;