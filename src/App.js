import React from 'react';
import './App.css';
/*
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
*/

import {Routes, Route, useNavigate} from "react-router-dom";
import ChatPage from './components/ChatPage/ChatPage'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'


function App(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={ChatPage}  />
            <Route exact path="/" component={LoginPage}  />
            <Route exact path="/" component={RegisterPage}  />
          </Switch>
      </Router>
    )
}

export default App;