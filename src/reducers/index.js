import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';
import PostsReducer from './reducer_posts';
import ValuesReducer from './reducer_values';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  posts: PostsReducer,
  values: ValuesReducer
});

export default rootReducer;
