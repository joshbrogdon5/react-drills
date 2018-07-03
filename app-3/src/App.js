import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: ["cheese", "sandwich","pizza","tacos","burrito","pichanga","chicken"],
      filterString: ""
    }
  }

  filterList(val){
    this.setState({filterString: val})

  }

  render() {
    let filter = this.state.list.filter((element) =>{
      if(element.includes(this.state.filterString)){
        return(element)
      }
    }).map((element) => {
      return(
        <h2>{element}</h2>
      )
    })
    return (
      <div className="App">
      <input onChange={(e) => this.filterList(e.target.value)} type="text"/>
        {filter}
      </div>
    );
  }
}

export default App;
