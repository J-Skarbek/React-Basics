import React, { Component } from 'react';

class Arms extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* <button onClick={this.props.onButtonClicked}>Click Me!</button> */}
      </div>
    );
  };
}

class CounterState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.countUp}>ClickMe!</button>
        <p>{this.state.count}</p>
      </div>
    );
  };
}

function Jelly(props) {
  return <div>{props.title}</div>;
}

export default Arms;
export { CounterState, Jelly };