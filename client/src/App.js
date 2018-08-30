import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';

class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <PrivateRoute exact={true} path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} /> 
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
