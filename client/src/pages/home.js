import React, { Component } from 'react';
import Journal from '../components/Journal';
import Pic from '../components/Pic';
import Quote from '../components/Quote';
import auth from '../services/auth';
import { BrowserRouter, withRouter } from 'react-router-dom';

class Home extends Component {
  
async signout(e) {
    e.preventDefault();
      await auth.signout();
      auth.isAuthenticated(false);
      this.props.history.push('/login');
};
  
    render() {
    return (
      <BrowserRouter>
        <div>
          <Journal/>
          <Pic/>
          <Quote />
         <div><button onClick={this.signout.bind(this)}>Signout</button></div>
       </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(Home);