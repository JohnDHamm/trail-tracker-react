import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function getStyles(props, context) {
	const {WeatherRadar} = context.muiTheme;

	return {
		root: {
			marginTop: 10,
		},
		img: {
			width: '100%',
			borderRadius: 2
		}
	};
}

class WeatherRadar extends Component {
	static muiName = 'WeatherRadar';

	static propTypes = {
		style: PropTypes.object,
		radarUrl: PropTypes.string
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { style, radarUrl } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		if (!radarUrl) {
			return ( <div>loading radar...</div>)
		}

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<img src={radarUrl} style={prepareStyles(Object.assign(styles.img, style))}></img>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(WeatherRadar);
