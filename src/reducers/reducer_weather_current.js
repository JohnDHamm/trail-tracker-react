import { GET_CURRENT_WEATHER } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case GET_CURRENT_WEATHER:
			console.log("action.payload.data", action.payload.data.current_observation);
			return action.payload.data.current_observation;
		default:
			return state;
	}
}
