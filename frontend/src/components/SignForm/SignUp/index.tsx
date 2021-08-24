import React, { useState } from 'react';

const SignUp: React.FC = () => { 
    return(
        <div id="signUp">
            <h3 id="title-signUp">New to 360-Shopping</h3>
            <form> 
                <label className="custom-margin-signIn-register">User name:</label>
                <input type="text"/>
                <div className="caution-username" >
                    <span style={{ "color": "red" }}>User name required</span>
                </div>
                <label className="custom-margin-signIn-register">Email Address:</label>
                <input type="text" id="signUp-email" name="signUp-email" />
                <div className="caution-confirm-password">
                    <span style={{ "color": "red", "marginBottom": "3px" }}>The email you entered is invalid.</span>
                    <span style={{ "color": "red" }}>Please check your email and try again.</span>
                </div>
                <label className="custom-margin-signIn-register">Password:</label>
                <input type="password" id="signUp-password" name="signUp-password" />
                <div className="caution-password">
                    <span>* 8 characters minimum</span>
                    <span>* At least one special character</span>
                    <span>* At least one number</span>
                    <span>* At least one lowercase letter</span>
                </div>
                <label className="custom-margin-signIn-register">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" />
                <div className="caution-confirm-password" >
                    <span style={{ "color": "red" }}>Your passwords do not match, please try again.</span>
                </div>
                <button className="custom-margin-signIn-register submit" disabled>REGISTER</button>
                {/* <button className="custom-margin-signIn-register submit" disabled>REGISTER</button> */}
            </form>
        </div>
    )
}

export default SignUp;