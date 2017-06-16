import { GET_WEATHER_FORECAST } from '../actions';

export default function (state=[], action) {
	switch (action.type) {
		case GET_WEATHER_FORECAST:
			return action.payload.data.forecast.simpleforecast.forecastday;
		default:
			return state;
	}
}
