import React, { Component } from 'react';

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
		return (
			<div>
				<img src="../src/img/hamiltonCreek_googleMap.jpg" width="100%" />
			</div>
		)
	}
}

export default GoogleMap;
