import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Verify(){
    return(
    <div className="App">
        <div className="verify">
         <img id="object_3" src={require('../assignment/assets/object 3.png')}></img>
         </div>
    <div id="ver">
    <form>
    <h2>Login</h2>
    <label>Enter Your Mobile Number</label>
    <div><input type="text" name="mobile number" placeholder="+91|9876543210"></input></div>
    <h2>VERIFY OTP</h2>
    <label>OTP sent to 9876543210</label>
    <input type="password" name="otp" placeholder="____  ____ ____ ____ ____ ____"></input> 
    <div>
    <span className="span1">Change Mobile Number</span>
    <span className="span2">Auto Detect in 00:00 </span><Link style={{textDecoration:"none"}} to="/login/verify"><span className="span3">RESEND</span></Link>
    </div>
    <Link style={{textDecoration:"none"}} to='/login/verify'><div id="button_main">
         <h2>PROCEED</h2>
         </div></Link>
    </form>
    </div>
    </div>
    
    );
}
export default Verify;