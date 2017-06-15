export const GET_TRAILS = 'fetch_trails';
export const GET_POSTS = 'fetch_posts';
import axios from 'axios';

const ROOT_URL = 'https://trailtracker-api.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:3000/api';

export function getTrails() {
	const request = axios.get(`${ROOT_URL}/trails`);

	return {
		type: GET_TRAILS,
		payload: request
	}
}

export function getPosts(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}`);

	return {
		type: GET_POSTS,
		payload: request
	}
}
