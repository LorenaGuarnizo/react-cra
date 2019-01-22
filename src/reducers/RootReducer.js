import { combineReducers } from 'redux';
import buttonReducer from '../components/button/Button.reducers';

export default combineReducers({
    button: buttonReducer,
});