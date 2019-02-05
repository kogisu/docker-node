import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Customer />
        </header>
      </div>
    );
  }
}

export default App;
