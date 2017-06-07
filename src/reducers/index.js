import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';

const rootReducer = combineReducers({ //telling redux how to define app state
  trails: TrailsReducer
});

export default rootReducer;
