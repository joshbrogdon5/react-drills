import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state= {
      message: ""
    }
  }

  changeMessage(val){
    this.setState({message: val})
  }


  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.changeMessage(e.target.value)} type="text"/>
        <p>{ this.state.message }</p>
      </div>
    );
  }
}

export default App;
