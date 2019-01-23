import { combineReducers } from 'redux';
import buttonReducer from '../components/buttonCounter/ButtonCounter.reducers';

export default combineReducers({
    button: buttonReducer,
});