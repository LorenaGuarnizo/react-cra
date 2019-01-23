import React, { Component } from 'react';
import { buttonPropTypes } from './Button.props';

import './Button.scss';

class Button extends Component {
    render() {
      return (
        <div className="button-container">
          <header className="button-header">
            <h1 className="app-title">Click on button</h1>
          </header>
          <button type="button" onClick={this.props.countAction}>Click</button>
          <p>Counter: {this.props.counter}</p>
        </div>
      );
    }
  
    static propTypes = buttonPropTypes;
  }

  export default Button;
  