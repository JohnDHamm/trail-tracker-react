export const GET_TRAILS = 'get_trails';
export const SET_CURRENT_TRAIL = 'set_current_trail';
export const SET_TICKET_TO_CLOSE = 'set_ticket_to_close';
export const DELETE_CLOSED_TICKET = 'delete_closed_ticket';
export const UPDATE_TRAIL = 'update_trail';
export const GET_POSTS = 'get_posts';
export const ADD_POST = 'add_post';
export const GET_CURRENT_WEATHER = 'get_current_weather';
export const GET_WEATHER_FORECAST = 'get_weather_forecast';
export const GET_WEATHER_RADAR = 'get_weather_radar';
export const UPLOAD_PHOTO = 'upload_photo';
export const SET_UPLOAD_PHOTO = 'set_upload_photo';
import axios from 'axios';
import superagent from 'superagent';

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

export function setCurrentTrail(trail) {
	return {
		type: SET_CURRENT_TRAIL,
		payload: trail
	}
}

export function setTicketToClose(post) {
	return {
		type: SET_TICKET_TO_CLOSE,
		payload: post
	}
}

export function deleteClosedTicket(postId, callback) {
	const request = axios.delete(`${ROOT_URL}/closeTicket/${postId}`)
		.then(() => callback());
	return {
		type: DELETE_CLOSED_TICKET,
		payload: request
	}
}

export function updateTrailTicketCount(trail, callback) {
	const request = axios.patch(`${ROOT_URL}/trail`, trail)
		.then(() => callback());
	return {
		type: UPDATE_TRAIL,
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

export function uploadPhoto(files) {
	const request =
		superagent.post(`${ROOT_URL}/photoupload`)
      .attach('theseNamesMustMatch', files[0])
      .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
        console.log("res", res);
      })
  return {
  	type: UPLOAD_PHOTO,
  	payload: request
  }
}

export function setUploadPhoto(file) {
	// console.log("file", file);
	return {
		type: SET_UPLOAD_PHOTO,
		payload: file
	}
}
