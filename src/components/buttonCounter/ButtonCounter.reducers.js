import { SIMPLE_ACTION } from './ButtonCounter.constants';

const initialState = { counter: 0};

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state;
  }
};

export default buttonReducer;