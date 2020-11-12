import React, { Component } from 'react';
import './App.css';
import Ball from './Components/Ball';
import Lottery from './Components/Lottery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery/>
      </div>
    )
  }
}

export default App
