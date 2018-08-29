import React, { Component } from 'react';
import Journal from '../components/Journal';
import Pic from '../components/Pic';
import Quote from '../components/Quote';

class Home extends Component {
  
    render() {
    return (
      <div>
        <Journal/>
        <Pic/>
        <Quote />
      </div>
    );
  }
}

export default Home;