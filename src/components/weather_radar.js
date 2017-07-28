import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherRadar extends Component {

	render () {
		const { style, radarUrl } = this.props;
		const styles = {
			root: {
				marginTop: 10,
			},
			img: {
				width: '100%',
				borderRadius: 2
			}
		};
		if (!radarUrl) {
			return ( <div>loading radar...</div>)
		}

		return (
			<div style={styles.root}>
				<img src={radarUrl} style={styles.img}></img>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(WeatherRadar);
