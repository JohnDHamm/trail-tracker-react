import { SET_UPLOAD_PHOTO } from '../actions';

export default function (state=[], action) {
	switch (action.type) {
		case SET_UPLOAD_PHOTO:
			// console.log("action.payload", action.payload);
			return action.payload;
		default:
			return state;
	}
}


