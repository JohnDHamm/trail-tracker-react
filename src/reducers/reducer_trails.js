import { GET_TRAILS } from '../actions';
import _ from 'lodash';

export default function (state={}, action) {
	switch (action.type) {
		case GET_TRAILS:
			// console.log("action.payload.data", action.payload.data);
			return _.mapKeys(action.payload.data, '_id');
		default:
			return state;
	}
}
