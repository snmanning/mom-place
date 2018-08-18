import React, { Component } from 'react';
import './App.css';
import Pic from './Pic';

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
        <Pic picUrl={this.state.picUrl}/>
      </div>
    );
  }
}

export default App;
