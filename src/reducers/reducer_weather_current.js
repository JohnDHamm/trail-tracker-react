import { GET_CURRENT_WEATHER } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case GET_CURRENT_WEATHER:
			const currentUrl = action.payload.data.current_observation.icon_url;
			const newUrl = currentUrl.replace('/k/', '/f/');
			action.payload.data.current_observation.icon_url = newUrl;
			return action.payload.data.current_observation;
		default:
			return state;
	}
}
