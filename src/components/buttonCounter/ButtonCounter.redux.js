const initialState = { counter: 0 };

/* CONSTANTS */
const SIMPLE_ACTION = "SIMPLE_ACTION";

/* ACTIONS */
export const countAction = value => dispatch =>
  dispatch({
    type: SIMPLE_ACTION,
    counter: value
  });

/* REDUCERS */
export const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
