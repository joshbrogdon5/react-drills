import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image theImage={require("./Components/Mountains2.jpg")}/>
      </div>
    );
  }
}

export default App;
