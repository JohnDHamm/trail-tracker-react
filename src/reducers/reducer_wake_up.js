import { WAKE_UP } from '../actions';

export default function (state='', action) {
	switch (action.type) {
		case WAKE_UP:
		console.log("wake up:", action.payload.data);
			return action.payload.data;
		default:
			return state;
	}
}
