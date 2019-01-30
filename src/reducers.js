import { combineReducers } from 'redux';
import { buttonReducer } from './components/buttonCounter/ButtonCounter.redux';
import { locationReducer } from './components/mapLocations/MapLocations.redux';

export default combineReducers({
    button: buttonReducer,
    locations: locationReducer
});
