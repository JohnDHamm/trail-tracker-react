import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function getStyles(props, context) {
	const {GoogleMap} = context.muiTheme;
	const {values} = props;

	return {
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
}

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
	static muiName = 'GoogleMap';

	static propTypes = {
		postUserName: PropTypes.node,
		date: PropTypes.node,
		message: PropTypes.node,
		style: PropTypes.object,
		userImgUrl: PropTypes.string
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		//this.refs.map = html element to render map to
		// return <div ref="map" />;
		const { postUserName, date, message, style, userImgUrl } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div>
					<img src="../src/img/hamiltonCreek_googleMap.jpg" width="100%" />
				</div>
				<div style={prepareStyles(Object.assign(styles.tempMsg, style))}>
					Placeholder for Google Map
				</div>
				<div style={prepareStyles(Object.assign(styles.coords, style))}>
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
