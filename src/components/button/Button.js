import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './Button.actions'
import { buttonPropTypes } from './Button.props';

import './Button.scss';

class Button extends Component {
  render() {
    return (
      <div className="button-container">
        <header className="button-header">
          <h1 className="App-title">Click on button</h1>
        </header>
        <button type="button" onClick={this.props.simpleAction}>Click</button>
        <p>{this.props.counter}</p>
      </div>
    );
  }

  static propTypes = buttonPropTypes;
}

const mapStateToProps = state => {
  const { counter } = state.button;
  return { counter };
};

export default connect(mapStateToProps, { simpleAction })(Button);