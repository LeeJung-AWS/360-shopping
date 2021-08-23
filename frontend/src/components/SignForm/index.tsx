// Style: sass/components/_signForm.scss

import { Link } from "react-router-dom";

const SignForm: React.FC = () => { 
    const signInFunc = (event: any) =>{
        event.preventDefault();
        console.log(event.target);
        console.log("sign in form")
    }
    return(<>
    <div className="card">
        <div className="card-header">
            <div className="signIn-register">
                <div className="signIn-register-left">
                    <div id="signIn">
                        <h3 id="title-signIn">Sign In</h3>
                        <form onSubmit={signInFunc}>
                            <label className="custom-margin-signIn-register">User Name:</label>
                            <input type="text" id="fname" name="username" required />
                            <label className="custom-margin-signIn-register">Password:</label>
                            <input type="password" id="lname" name="password" required />
                            <button type="submit" value="SIGN IN" className="custom-margin-signIn-register submit">SIGN IN</button>
                        </form>
                        <Link to="" className="custom-margin-signIn-register" id="forgot-password">Forgot Your Password?</Link>
                        <div id="divider-authentication">
                            <div className="myHr"></div>
                            <span className="custom-Or">or</span>
                            <div className="myHr"></div>
                        </div>
                    </div>
                </div>
                <div className="signIn-register-center">
                    {/* Center Vertical Divider */}
                </div>
                <div className="signIn-register-right">
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
                            <button className="custom-margin-signIn-register submit" >REGISTER</button>
                            <button className="custom-margin-signIn-register submit" disabled>REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>)}

export default SignForm;

