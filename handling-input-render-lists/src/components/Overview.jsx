import React, { Component, useState } from 'react';

class Overview extends Component {
  constructor() {
    super()

    this.state = {
      task: { text: ''},
      tasks: [],
    }
  }

  //write the js functions here******

  render() {
    return (
      <div className="App text-red-300">
        <h1>Testing!</h1>
      </div>
    )
  }
}

export default Overview;