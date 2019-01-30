import React, { Component } from "react";

import buttonPropTypes, { buttonDefaultProps } from "./Button.props";

import './Button.scss';

export const ERROR_MESSAGE_GEATERTHAN =
  "Can't increment. Since 10 is the max value";
export const ERROR_MESSAGE_LESSTHAN =
  "Can't increment. Since 10 is the max value";

class Button extends Component {
  static propTypes = buttonPropTypes;

  static defaultProps = buttonDefaultProps;

  constructor(props) {
    super(props);
    const { counter } = props;
    this.state = {
      counterValue: counter,
      message: ""
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    const { counterValue } = this.state;
    const { setIncrement } = this.props;
    if (counterValue < 10) {
      this.setState({ counterValue: counterValue + 1 });
      setIncrement(counterValue);
    } else {
      this.setState({ message: ERROR_MESSAGE_GEATERTHAN });
    }
  }

  onDecrement() {
    const { counterValue } = this.state;
    const { setDecrement } = this.props;
    if (counterValue) {
      this.setState({ counterValue: counterValue - 1 });
      setDecrement(counterValue);
    } else {
      this.setState({ message: ERROR_MESSAGE_LESSTHAN });
    }
  }

  render() {
    const { counterValue, message } = this.state;
    return (
      <div className="button-container">
        <header className="button-header">
          <h1 className="app-title">Click on button</h1>
        </header>
        <button id="decrement" type="button" onClick={this.onDecrement}>
          -
        </button>
        <input
          id="counterValue"
          type="text"
          className="text-value"
          readOnly
          value={counterValue}
        />
        <button id="increment" type="button" onClick={this.onIncrement}>
          +
        </button>
        <p>{message}</p>
      </div>
    );
  }
}

export default Button;
