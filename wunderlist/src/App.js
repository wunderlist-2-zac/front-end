import React, {} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {} from 'react-hook-form';

import Login from './Components/Login';
import SignUp from './Components/SignUp';


import LandingPage from './Components/LandingPage';


function App() {

  return (
    <div>
     
      <Route path="/" exact component = {LandingPage} />
      <Route path = "/Login" component = {Login} />
      <Route path = "/SignUp" component = {SignUp} />
        
     
    </div>
  );
}

export default App;
