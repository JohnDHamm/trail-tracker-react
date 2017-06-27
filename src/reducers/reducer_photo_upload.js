import { SET_UPLOAD_PHOTO } from '../actions';

export default function (state=[], action) {
	switch (action.type) {
		case SET_UPLOAD_PHOTO:
			return action.payload;
		default:
			return state;
	}
}


