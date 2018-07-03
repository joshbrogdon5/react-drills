import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      tasks: [],
      newTask: ""
    }
    this.addTask = this.addTask.bind(this);
  }

  changeNewTask(val){
    this.setState({newTask: val})
  }

  addTask(){
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: ""
    })
  }

  render() {
    let tasks = this.state.tasks.map((element, index) => {
      return(
        <Todo key={index} task={element}/>        
      )
    })
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <input 
          value={this.state.newTask}
          placeholder="Enter New Task"
          onChange={(e) => this.changeNewTask(e.target.value)} 
        />
        <button onClick={this.addTask}>Add</button>
        <br />
        {tasks}
      </div>
    );
  }
}

export default App;
