import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: "",
      password: ""
    }
  }

  updateUsername(val){
    this.setState({username: val})
  }

  updatePassword(val){
    this.setState({password: val})
  }

  userLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input placeholder="Username" onChange={(e) => this.updateUsername(e.target.value)}/>
        <input placeholder="Password" onChange={(e) => this.updatePassword(e.target.value)}/>
        <button onClick={() => this.userLogin() }>login</button>

      </div>
    );
  }
}

export default App;
