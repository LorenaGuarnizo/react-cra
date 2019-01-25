import PropTypes from "prop-types";

const buttonPropTypes = {
  counter: PropTypes.number,
  doIncrement: PropTypes.func.isRequired,
  doDecrement: PropTypes.func.isRequired
};

export const buttonDefaultProps = {
  counter: 0
};

export default buttonPropTypes;
