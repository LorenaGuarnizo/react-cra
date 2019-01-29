import PropTypes from "prop-types";

const buttonPropTypes = {
  counter: PropTypes.number,
  setIncrement: PropTypes.func.isRequired,
  setDecrement: PropTypes.func.isRequired
};

export const buttonDefaultProps = {
  counter: 0
};

export default buttonPropTypes;
