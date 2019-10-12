import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import LoginFail from './pages/login_fail';

class App extends Component{
  render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path ="/login-fail" component={LoginFail}/>
            <Redirect to="/404"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
