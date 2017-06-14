import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';
import PostsReducer from './reducer_posts';
import ValuesReducer from './reducer_values';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  posts: PostsReducer,
  values: ValuesReducer,
  weather: WeatherReducer
});

export default rootReducer;
