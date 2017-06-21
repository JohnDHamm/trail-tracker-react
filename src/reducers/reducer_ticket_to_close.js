import { SET_TICKET_TO_CLOSE } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_TICKET_TO_CLOSE:
			return action.payload;
		default:
			return state;
	}
}


