import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  posts: PostsReducer
});

export default rootReducer;
