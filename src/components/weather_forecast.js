import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function getStyles(props, context) {
	const {WeatherForecast} = context.muiTheme;
	const {values} = props;

	return {
		root: {
			width: '100%',
		},
		weekday: {
			color: `${values.primary.color}`,
			fontFamily: `${values.tertiary.font}`,
			fontSize: 20,
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'flex-end'
		},
		conditions: {
			fontSize: 14,
			fontFamily: `${values.primary.font}`,
			color: `${values.tertiary.color}`,
			marginBottom: 5,
			lineHeight: 1
		},
		temps: {
			fontSize: 14,
			lineHeight: 1.3
		},
		precip: {
			fontSize: 12,
			lineHeight: 1.2
		},
		humidity: {
			fontSize: 12,
			lineHeight: 1.2
		}
	};
}

class WeatherForecast extends Component {
	static muiName = 'WeatherForecast';

	static propTypes = {
		style: PropTypes.object,
		weekday: PropTypes.node,
		conditions: PropTypes.node,
		iconUrl: PropTypes.string,
		tempHigh: PropTypes.node,
		tempLow: PropTypes.node,
		precip: PropTypes.node,
		humidity: PropTypes.node
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { style, weekday, conditions, iconUrl, tempHigh, tempLow, precip, humidity } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		if (!weekday) {
			return ( <div>loading forecast...</div>)
		}

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.weekday, style))}>
					<span>
						{weekday}
					</span>
					<img src={iconUrl} width="35"></img>
				</div>
				<div style={prepareStyles(Object.assign(styles.conditions, style))}>
						{conditions}
				</div>
				<div style={prepareStyles(Object.assign(styles.temps, style))}>
					High {tempHigh}&deg; / Low {tempLow}&deg;
				</div>
				<div style={prepareStyles(Object.assign(styles.humidity, style))}>
					Humidity {humidity}%
				</div>
				<div style={prepareStyles(Object.assign(styles.precip, style))}>
					Precip. {precip}"
				</div>
			</div>
		);
	}
}

function mapStateToProps({values}) {
	return { values };
}

export default connect(mapStateToProps)(WeatherForecast);
