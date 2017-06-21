import { SET_CURRENT_TRAIL } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_TRAIL:
			return action.payload;
		default:
			return state;
	}
}


