import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
		getPosts,
		setCurrentTrailId,
		setTicketToClose,
		getCurrentWeather,
		getWeatherForecast,
		getWeatherRadarUrl
	} from '../actions';

import Navbar from './navbar'
import TrailTitleCard from './trail_title_card';
import TrailAddPostButton from './trail_add_post_button';
import TrailPostCard from './trail_post_card';
import TrailPostCardPhoto from './trail_post_card_photo';
import TrailCloseTicketDialog from './trail_close_ticket_dialog';
import TrailOpenTicketPostTop from './trail_open_ticket_post_top';
import WeatherCurrentConditionsCard from './weather_current_conditions_card'
import WeatherRadar from './weather_radar'
import WeatherForecast from './weather_forecast'
import GoogleMap from './google_map';
import AddPostDialog from './trail_add_post_dialog';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Trail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.setCurrentTrailId(id);
		this.props.getPosts(id);
		const { latitude, longitude } = this.props.trail;
		const coords = latitude.toString() + ',' + longitude.toString();
		this.props.getCurrentWeather(coords);
		this.props.getWeatherForecast(coords);
		this.props.getWeatherRadarUrl(coords);
	}

	setClosingTicket (id) {
		this.props.setTicketToClose(this.props.posts[id]);
	}

	renderPosts () {

		return _.map(this.props.posts, post => {
			const postStyle = `post-card post-style-${post.postTypeString}`;
			if (post.hasPhoto) {

				if (post.ticketopen) {
					return (
						<div className={postStyle} key={post._id}>
							<TrailOpenTicketPostTop />
							<TrailPostCardPhoto
								userImgUrl={post.userImgUrl}
								postUserName={post.userName}
								date={post.postFormatDate}
								message={post.description}
								photoUrl={post.photoUrl} />
							<div id={post._id} className="closeTicketDiv">
								<div onClick={() => this.setClosingTicket(post._id)}>
									<TrailCloseTicketDialog />
								</div>
							</div>
						</div>
					)
				} else {
					return (
						<div className={postStyle} key={post._id}>
							<TrailPostCardPhoto
								userImgUrl={post.userImgUrl}
								postUserName={post.userName}
								date={post.postFormatDate}
								message={post.description}
								photoUrl={post.photoUrl} />
						</div>
					)
				}
			} else {
				if (post.ticketopen) {
					return (
						<div className={postStyle} key={post._id}>
							<TrailOpenTicketPostTop />
							<TrailPostCard
								userImgUrl={post.userImgUrl}
								postUserName={post.userName}
								date={post.postFormatDate}
								message={post.description}/>
							<div id={post._id} className="closeTicketDiv">
								<div onClick={() => this.setClosingTicket(post._id)}>
									<TrailCloseTicketDialog />
								</div>
							</div>
						</div>
					)
				} else {
					return (
						<div className={postStyle} key={post._id}>
							<TrailPostCard
								userImgUrl={post.userImgUrl}
								postUserName={post.userName}
								date={post.postFormatDate}
								message={post.description}/>
						</div>
					)
				}
			}
		})
	}

	renderWeatherForecast() {
		return this.props.weatherForecast.map(forecast => {
			const newIconUrl = forecast.icon_url.replace('/k/', '/f/');
			return (
				<div className="weatherForecastDay" key={forecast.date.weekday}>
					<WeatherForecast
						weekday={forecast.date.weekday}
						conditions={forecast.conditions}
						iconUrl={newIconUrl}
						tempHigh={forecast.high.fahrenheit}
						tempLow={forecast.low.fahrenheit}
						humidity={forecast.avehumidity}
						precip={forecast.qpf_allday.in} />
				</div>
			)
		})
	}

	render() {
		const { trail, posts, currentWeather, weatherForecast, weatherRadarUrl, user } = this.props;

		if (!trail) {
			return <div>Loading trail...</div>;
		}

		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<div className="container">
						<div className="row">

							<div id="leftSide" className="col-lg-4 col-md-4 hidden-sm-down">
								<div className="row justify-content-center">
									<TrailTitleCard title={trail.name} />
								</div>
								<div className="mapDiv row">
									<GoogleMap lon={trail.longitude} lat={trail.latitude} zoom={trail.mapZoom} />
								</div>
								<div className="row hidden-lg-up">
									<WeatherCurrentConditionsCard
										conditions={currentWeather.weather}
										iconUrl={currentWeather.icon_url}
										temp={currentWeather.temp_f}
										feelsLikeTemp={currentWeather.feelslike_f}
										precip={currentWeather.precip_today_in}
									/>
								</div>
								<div className="row hidden-lg-up">
									<WeatherRadar
										radarUrl={weatherRadarUrl}
									/>
								</div>
								<div className="row hidden-lg-up weatherForecastDiv">
									{this.renderWeatherForecast()}
								</div>
							</div>

							<div id="center" className="col-lg-6 col-md-8">
								<div className="hidden-md-up">
									<TrailTitleCard title={trail.name} />
								</div>
								<div className="addPostDiv">
									<AddPostDialog />
								</div>
								<div className="postsDiv">
									{this.renderPosts()}
								</div>
							</div>

							<div id="rightSide" className="col-lg-2 hidden-md-down">
								<div className="row">
									<WeatherCurrentConditionsCard
										conditions={currentWeather.weather}
										iconUrl={currentWeather.icon_url}
										temp={currentWeather.temp_f}
										feelsLikeTemp={currentWeather.feelslike_f}
										precip={currentWeather.precip_today_in}
									/>
								</div>
								<div className="row">
									<WeatherRadar
										radarUrl={weatherRadarUrl}
									/>
								</div>
								<div className="row weatherForecastDiv">
									{this.renderWeatherForecast()}
								</div>
							</div>

						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ user, trails, posts, currentWeather, weatherForecast, weatherRadarUrl }, ownProps) {
	return { trail: trails[ownProps.match.params.id], posts, currentWeather, weatherForecast, user, weatherRadarUrl };
}

export default connect(mapStateToProps, { getPosts, getCurrentWeather, getWeatherForecast, getWeatherRadarUrl, setCurrentTrailId, setTicketToClose } )(Trail);

