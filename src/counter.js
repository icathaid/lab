import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleUpClick = e => {
    e.preventDefault();
    let incrementer = this.state.counter + 1;
    this.setState({ counter: incrementer });
  };

  handleDownClick = e => {
    e.preventDefault();
    let decrementer = this.state.counter - 1;
    this.setState({ counter: decrementer });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <a id="button" href="true" onClick={this.handleUpClick}>
          Click Me Up!
        </a>
        <br />
        <a id="button" href="true" onClick={this.handleDownClick}>
          Click Me Down!
        </a>
      </div>
    );
  }
}

export default Counter;
