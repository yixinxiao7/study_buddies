import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Login from './pages/login';
import Home from './pages/home';
import LoginFail from './pages/login_fail';
import Post from './pages/post';
import Post_Success from './pages/post_success';

class App extends Component{
  render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/post-success" component={Post_Success}/>
            <Route exact path ="/login-fail" component={LoginFail}/>
            <Route exact path = "/post" component={Post}/> 
            <Redirect to="/404"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
