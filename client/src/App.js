import React, { Component } from 'react';
import './App.css';
import Pic from './components/Pic';
import Quote from './components/Quote';
import Journal from './components/Journal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picUrl:
        'https://picsum.photos/350/350/?random'
    }
  };
  render() {
    return (
      <div>
        <Journal/>
        <Pic picUrl={this.state.picUrl}/>
        <Quote />
      </div>
    );
  }
}

export default App;
