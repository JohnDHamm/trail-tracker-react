import { combineReducers } from 'redux';
import TrailsReducer from './reducer_trails';
import CurrentTrailReducer from './reducer_trail_current';
import TicketToCloseReducer from './reducer_ticket_to_close';
import PostsReducer from './reducer_posts';
import ValuesReducer from './reducer_values';
import CurrentWeatherReducer from './reducer_weather_current';
import WeatherForecastReducer from './reducer_weather_forecast';
import WeatherRadarReducer from './reducer_weather_radar';
import UserReducer from './reducer_user';
import PhotoUploadReducer from './reducer_photo_upload';

const rootReducer = combineReducers({
  trails: TrailsReducer,
  currentTrail: CurrentTrailReducer,
  posts: PostsReducer,
  ticketToClose: TicketToCloseReducer,
  values: ValuesReducer,
  currentWeather: CurrentWeatherReducer,
  weatherForecast: WeatherForecastReducer,
  weatherRadarUrl: WeatherRadarReducer,
  user: UserReducer,
  uploadPhoto: PhotoUploadReducer
});

export default rootReducer;
