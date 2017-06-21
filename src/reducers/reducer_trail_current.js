import { SET_CURRENT_TRAIL_ID } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_TRAIL_ID:
			return action.payload;
		default:
			return state;
	}
}


