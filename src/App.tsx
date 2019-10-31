import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
