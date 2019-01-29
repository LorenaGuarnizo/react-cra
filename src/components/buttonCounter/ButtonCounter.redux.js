const initialState = { counter: 0 };

/* CONSTANTS */
export const SET_DECREMENT = "SET_DECREMENT";
export const SET_INCREMENT = "SET_INCREMENT";

/* ACTIONS */
export const setIncrement = value => dispatch =>
  dispatch({
    type: SET_INCREMENT,
    counter: value
  });

export const setDecrement = value => dispatch =>
  dispatch({
    type: SET_DECREMENT,
    counter: value
  });

/* REDUCERS */
export const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INCREMENT:
      return {
        ...state,
        counter: action.counter
      };
    case SET_DECREMENT:
      return {
        ...state,
        counter: action.counter
      };
    default:
      return state;
  }
};
