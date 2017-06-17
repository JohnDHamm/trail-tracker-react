import { GET_WEATHER_RADAR } from '../actions';

export default function (state='', action) {
	switch (action.type) {
		case GET_WEATHER_RADAR:
			return action.payload.data;
		default:
			return state;
	}
}
