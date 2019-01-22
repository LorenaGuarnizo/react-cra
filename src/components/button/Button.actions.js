import { SIMPLE_ACTION } from './Button.constants';

export const simpleAction = value => dispatch => {
  return dispatch({
    type: SIMPLE_ACTION,
    counter: value,
  })
};
