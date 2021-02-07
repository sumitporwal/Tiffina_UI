import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Login(){
    return(
    <div className="App">
        <div className="login">
         <img id="object_2" src={require('../assignment/assets/object 2.png')}></img>
         </div>
         <div id="login1">
         <h2>Login</h2>
         <Link style={{textDecoration:"none"}} to='/login/verify'><div id="button_secndry">
         <span><img className="div_image" src={require('../assignment/assets/icon _mobile.png')}></img></span>
         <span className="inp">Enter Your Mobile Number</span>
         </div></Link>
         <Link style={{textDecoration:"none"}} to='/login'><div id="button_secndry">
         <img className="div_image" src={require('../assignment/assets/icon _fb.png')}></img>
         <span className="inp">Continue With Facebook</span>
         </div></Link>
         <Link style={{textDecoration:"none"}} to='/login'><div id="button_secndry">
         <img className="div_image" src={require('../assignment/assets/icon _google.png')}></img>
         <span className="inp">Continue With Google</span>
         </div></Link>
         <Link style={{textDecoration:"none"}} to='/login'><div id="button_secndry">
         <img className="div_image" src={require('../assignment/assets/icon _mail.png')}></img>
         <span className="inp">Continue With Email</span>
         </div></Link>
         <div id="term">
         <p>By Continuing.You Agree To Our</p>
         <p><u>Terms of Service & Privacy Policy</u></p>
         </div>
         </div>
    </div>
    );
}
export default Login;