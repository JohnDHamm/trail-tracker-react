import React, { Component } from 'react';
import { connect } from 'react-redux';


class GoogleMap extends Component {
	// componentDidMount() {
	// 	new google.maps.Map(this.refs.map, {
	// 		zoom: this.props.zoom,
	// 		center: {
	// 			lat: this.props.lat,
	// 			lng: this.props.lon,
	// 		}
	// 	});
	// }


	render () {
		//this.refs.map = html element to render map to
		// return <div ref="map" />;
		const { postUserName, date, message, style, userImgUrl, values } = this.props;
		const styles = {
			root: {
				position: 'relative'
				// padding: 10
			},
			tempMsg: {
				position: 'absolute',
				top: 5,
				left: 5,
				fontSize: 25,
				color: `${values.primary.color}`,
				textShadow: `1px 1px 0 ${values.secondary.color}`,
				fontFamily: `${values.tertiary.font}`,
			},
			coords: {
				position: 'absolute',
				bottom: 5,
				left: 5,
				fontSize: 15,
				color: `${values.secondary.color}`,
				textShadow: `1px 1px 0 ${values.primary.color}`,
				fontFamily: `${values.tertiary.font}`,
			}
		};

		return (
			<div style={styles.root}>
				<div>
					<img src="../src/img/hamiltonCreek_googleMap.jpg" width="100%" />
				</div>
				<div style={styles.tempMsg}>
					Placeholder for Google Map
				</div>
				<div style={styles.coords}>
					Latitude: {this.props.currentTrail.latitude} Longitude: {this.props.currentTrail.longitude}
				</div>
			</div>
		)
	}
}

function mapStateToProps({ currentTrail, values }) {
	return { currentTrail, values };
}

// export default GoogleMap;
export default connect(mapStateToProps)(GoogleMap);
