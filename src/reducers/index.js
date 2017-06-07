import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';

const rootReducer = combineReducers({
  trails: TrailsReducer
});

export default rootReducer;
