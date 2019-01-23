import { SIMPLE_ACTION } from './ButtonCounter.constants';

export const countAction = value => dispatch => {
  return dispatch({
    type: SIMPLE_ACTION,
    counter: value,
  })
};
