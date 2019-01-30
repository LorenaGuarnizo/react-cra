import axios from 'axios';

const initialState = { countries: [] };

/* CONSTANTS */
export const SET_COUNTRIES = "SET_COUNTRIES";
export const FAIL_COUNTRIES_REQUEST = "FAIL_COUNTRIES_REQUEST";

/* ACTIONS */

export const getCountries = () => async dispatch => {
  try {
    const locations = await axios.get('https://restcountries.eu/rest/v2/all');
    return dispatch({
      type: SET_COUNTRIES,
      countries: locations.data
    });
  } catch (error) {
    return dispatch({
      type: FAIL_COUNTRIES_REQUEST,
      error:true
    });
  }
};

/* REDUCERS */

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
    case FAIL_COUNTRIES_REQUEST:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
