import React, { Component } from "react";

import buttonPropTypes, { buttonDefaultProps } from "./Button.props";

class Button extends Component {
  static propTypes = buttonPropTypes;

  static defaultProps = buttonDefaultProps;

  constructor(props) {
    super(props);
    const { counter } = props;
    this.state = {
      counterValue: counter
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    const { counterValue } = this.state;
    const { doIncrement } = this.props;
    this.setState({ counterValue: counterValue + 1 });
    doIncrement();
  }

  onDecrement() {
    const { counterValue } = this.state;
    const { doDecrement } = this.props;
    this.setState({ counterValue: counterValue - 1 });
    doDecrement();
  }

  render() {
    const { counterValue } = this.state;
    return (
      <div className="button-container">
        <header className="button-header">
          <h1 className="app-title">Click on button</h1>
        </header>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <input
          type="text"
          className="text-value"
          readOnly
          value={counterValue}
        />
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
      </div>
    );
  }
}

export default Button;
