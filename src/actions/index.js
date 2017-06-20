export const GET_TRAILS = 'get_trails';
export const GET_POSTS = 'get_posts';
export const ADD_POST = 'add_post';
export const GET_CURRENT_WEATHER = 'get_current_weather';
export const GET_WEATHER_FORECAST = 'get_weather_forecast';
export const GET_WEATHER_RADAR = 'get_weather_radar';
import axios from 'axios';

// const ROOT_URL = 'https://trailtracker-api.herokuapp.com/api';
// const WEATHER_ROOT_URL = 'https://trailtracker-api.herokuapp.com/api/weather';

// ************* localhost:3000 testing of api *************
const ROOT_URL = 'http://localhost:3000/api';
const WEATHER_ROOT_URL = 'http://localhost:3000/api/weather';

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

export function addPost(newPost, callback) {
	const request = axios.post(`${ROOT_URL}/post`, newPost)
		.then(() => callback());

	return {
		type: ADD_POST,
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

export function getWeatherForecast(coords) {
	const request = axios.get(`${WEATHER_ROOT_URL}/forecast/${coords}`);

	return {
		type: GET_WEATHER_FORECAST,
		payload: request
	}
}

export function getWeatherRadarUrl(coords) {
	const request = axios.get(`${WEATHER_ROOT_URL}/radar/${coords}`);

	return {
		type: GET_WEATHER_RADAR,
		payload: request
	}
}
