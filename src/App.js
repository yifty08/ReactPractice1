// import React from 'react';
//class App extends React.component {}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeAddress from './components/HomeAddress';

class App extends Component {
  render() {

    let name = "Sam";
    let address = "23 Main St"
    console.log(`name is ${name}`);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hey Hello World!!</h1>
          <HomeAddress 
            name="Joe"
            address="88 birlington road, arlington, va"
            />
        </header>
      </div>
    );
  }
}

export default App;
