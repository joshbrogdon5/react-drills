import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: ['Hello','Josh','friends','blah','blah']
    }
  }


  render() {
    let displayList = this.state.list.map((element,index) => {
      return(
        <h2 type={index}>{element}</h2>
      )
    })
    return (
      <div className="App">
        {displayList}
      </div>
    );
  }
}

export default App;
