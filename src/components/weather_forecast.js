import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherForecast extends Component {

	render () {
		const { style, weekday, conditions, iconUrl, tempHigh, tempLow, precip, humidity, values } = this.props;
		const styles = {
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

		if (!weekday) {
			return ( <div>loading forecast...</div>)
		}

		return (
			<div style={styles.root}>
				<div style={styles.weekday}>
					<span>
						{weekday}
					</span>
					<img src={iconUrl} width="35"></img>
				</div>
				<div style={styles.conditions}>
						{conditions}
				</div>
				<div style={styles.temps}>
					High {tempHigh}&deg; / Low {tempLow}&deg;
				</div>
				<div style={styles.humidity}>
					Humidity {humidity}%
				</div>
				<div style={styles.precip}>
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
