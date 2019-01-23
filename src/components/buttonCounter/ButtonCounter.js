import React, { Component } from 'react';
import { connect } from 'react-redux';

import { countAction } from './ButtonCounter.actions'
import { buttonPropTypes } from './ButtonCounter.props';

import Button from '../../common/button/Button';

import './ButtonCounter.scss';

class ButtonCounter extends Component {
  render() {
    return (
      <Button {...this.props} />
    );
  }

  static propTypes = buttonPropTypes;
}

const mapStateToProps = state => {
  const { counter } = state.button;
  return { counter };
};

export default connect(mapStateToProps, { countAction })(ButtonCounter);