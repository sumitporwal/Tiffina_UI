import React from 'react';
import './App.css';
import Initial from './Components/Initial';
import Home from './Components/Home';
import Login from './Components/Login';
import Verify from './Components/Verify';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route path="/" exact component={Initial}></Route>
     <Route path="/home" exact component={Home}></Route>
     <Route path="/login" exact component={Login}></Route>
     <Route path="/login/verify" exact component={Verify}></Route>
     </BrowserRouter>
    </div>
  );
}

export default App;
