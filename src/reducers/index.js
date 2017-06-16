import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';
import PostsReducer from './reducer_posts';
import ValuesReducer from './reducer_values';
import WeatherReducer from './reducer_weather';
import CurrentWeatherReducer from './reducer_weather_current';
import WeatherForecastReducer from './reducer_weather_forecast';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  posts: PostsReducer,
  values: ValuesReducer,
  currentWeather: CurrentWeatherReducer,
  weatherForecast: WeatherForecastReducer,
  weather: WeatherReducer
});

export default rootReducer;
