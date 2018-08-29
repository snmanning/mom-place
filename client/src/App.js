import React, { Component } from 'react';
import './App.css';
import Pic from './components/Pic';
import Quote from './components/Quote';
import Journal from './components/Journal';

class App extends Component {
  
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

export default App;
