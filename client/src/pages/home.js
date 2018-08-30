import React, { Component } from 'react';
import Journal from '../components/Journal';
import Pic from '../components/Pic';
import Quote from '../components/Quote';
import auth from '../services/auth';

class Home extends Component {

signout(e) {
    e.preventDefault();
    auth.signout();
};
  
    render() {
    return (
      <div>
        <Journal/>
        <Pic/>
        <Quote />
        <div><button onClick={this.signout}>Signout</button></div>
      </div>
    );
  }
}

export default Home;