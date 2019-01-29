import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { setIncrement, setDecrement } from "./ButtonCounter.redux";
import buttonPropTypes from "../../common/button/Button.props";

import Button from "../../common/button/Button";

import "./ButtonCounter.scss";

class ButtonCounter extends PureComponent {
  static propTypes = buttonPropTypes;

  render() {
    return <Button {...this.props} />;
  }
}
const mapStateToProps = state => {
  const { counter } = state.button;
  return { counter };
};

export default connect(
  mapStateToProps,
  { setIncrement, setDecrement }
)(ButtonCounter);
