export const GET_TRAILS = 'get_trails';
export const GET_POSTS = 'get_posts';
export const GET_CURRENT_WEATHER = 'get_current_weather';
import axios from 'axios';

const ROOT_URL = 'https://trailtracker-api.herokuapp.com/api';
const WEATHER_ROOT_URL = 'https://trailtracker-api.herokuapp.com/api/weather';

// ************* localhost:3000 testing of api *************
// const ROOT_URL = 'http://localhost:3000/api';
// const WEATHER_ROOT_URL = 'http://localhost:3000/api/weather';

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

export function getCurrentWeather(coords) {
	const request = axios.get(`${WEATHER_ROOT_URL}/current/${coords}`);

	return {
		type: GET_CURRENT_WEATHER,
		payload: request
	}
}
