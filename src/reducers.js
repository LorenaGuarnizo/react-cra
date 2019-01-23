import { combineReducers } from 'redux';
import { buttonReducer } from './components/buttonCounter/ButtonCounter.redux';

export default combineReducers({
    button: buttonReducer,
});