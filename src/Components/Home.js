import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
function Home(){
    return(
    <div className="App">
        <div className="home">
         <img id="object_1" src={require('../assignment/assets/object 1.png')}></img>
         <h2 id="hurry">HURRY!!</h2>
         <p id="hunger">HUNGER DON'T WAIT</p>
         </div>
         <div id="home1">
         <Link style={{textDecoration:"none"}} to='/login'><div id="button_main">
         <h2>GET STARTED</h2>
         </div></Link>
         <Link style={{textDecoration:"none"}} to='/home'><div id="button_secndry">
         <p>Continue Without Login</p>
         </div></Link>
         <Link style={{textDecoration:"none"}} to='/login'><div id="button_secndry">
         <p>Already a Tiffinia Member?Login</p>
         </div></Link>
         </div>
    </div>
    );
}
export default Home;