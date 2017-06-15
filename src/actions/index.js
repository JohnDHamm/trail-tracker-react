export const FETCH_TRAILS = 'fetch_trails';
export const FETCH_POSTS = 'fetch_posts';
import axios from 'axios';

const ROOT_URL = 'https://trailtracker-api.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:3000/api';

export function fetchTrails() {
	const request = axios.get(`${ROOT_URL}/trails`);

	return {
		type: FETCH_TRAILS,
		payload: request
	}
}

export function fetchPosts(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}
