import React, { Component, useState } from 'react';

class Application extends Component {
  constructor(props) {
    super(props)
      this.state = {
      task: { text: ''},
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: ''},
    });
  }

  // handleTaskInput() {
  //   console.log('triggered')

  // };

 render() {
    const { task, tasks } = this.state;
    return (
      <div className="App">
          <h1 className="text-red-300">Testing Application Component!</h1>
          <form>
            <label htmlFor="taskInput">Enter your task...</label>
            <input
              type="text"
              id="taskInput"
              name="task"
              placeholder="Ex. Make spaghetti..."
              className="text-stone-900"
              onChange={this.handleChange}
            />
            <button onSubmit={this.onSubmitTask}>Submit</button>
          </form>
        </div>
    )
  }
}

export default Application;