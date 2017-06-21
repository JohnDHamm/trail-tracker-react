import { GET_TRAILS } from '../actions';
// import { SET_CURRENT_TRAIL_ID } from '../actions';
import _ from 'lodash';

export default function (state={}, action) {
	switch (action.type) {
		case GET_TRAILS:
			return _.mapKeys(action.payload.data, '_id');
		default:
			return state;
	}
}
