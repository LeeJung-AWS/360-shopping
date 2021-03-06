import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { loginUser } from "../../../utils/API";
import Auth from '../../../utils/auth';

const SignIn: React.FC = () => { 
    const [userFormData, setUserFormData] = useState({ username: '', password: '' }); 
    const [showAlert, setShowAlert] = useState(false);

    const [ usernameNotice, setUsernameNotice] = useState('none');
    const [ passwordNotice, setPasswordNotice] = useState('none');

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const focusOutUserName = () => {
        if(userFormData.username === ""){
            setUsernameNotice('block');
        }else{
            setUsernameNotice('none');
        }
    }
    const focusOutPassWord = () => {
        if(userFormData.username === ""){
            setPasswordNotice('block');
        }else{
            setPasswordNotice('none');
        }
    }

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
      
        //   setUserFormData({
        //     username: '',
        //     password: '',
        //   });
    }

    return(
        <div id="signIn">
            <h3 id="title-signIn">Sign In</h3>
            {showAlert ? <div id="warning-sign-in">The User name or Password you entered is incorrect.</div>
                        : <></>}
            <form onSubmit={signInFunc}>
                <label className="custom-margin-signIn-register">User Name:</label>
                <input type="text" id="fname" name="username" onChange={handleInputChange} onBlur={focusOutUserName} />
                <div id="caution-username" style={{ "display": usernameNotice }}>
                    <span style={{ "color": "red" }}>User name required</span>
                </div>
                <label className="custom-margin-signIn-register">Password:</label>
                <input type="password" id="lname" name="password" onChange={handleInputChange} onBlur={focusOutPassWord} />
                <div id="caution-username" style={{ "display": passwordNotice }}>
                    <span style={{ "color": "red" }}>Please enter your password</span>
                </div>
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