import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Create from './pages/CreateLogin.jsx';
import Login from './pages/Login.jsx';
import Dash from './pages/Dash.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/createlogin" component={Create}/>
          <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dash}/>

        </div>
      </Router>
    );
  }
}


export default App;
