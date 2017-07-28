import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherCurrentConditionsCard extends Component {

	render () {
		const { style, conditions, iconUrl, temp, feelsLikeTemp, precip, values } = this.props;
		const styles = {
			root: {
				backgroundColor: 'rgba(255,255,255,0.5)',
				padding: '0 10px',
				width: '100%',
				marginTop: 10,
				borderRadius: 2,
				fontFamily: `${values.secondary.font}`
			},
			title: {
				fontSize: 16,
				fontFamily: `${values.primary.font}`,
				color: `${values.tertiary.color}`,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			},
			tempNumber: {
				fontFamily: `${values.tertiary.font}`,
				fontSize: 24,
				color: `${values.primary.color}`,
				lineHeight: 1
			},
			tempText: {
				fontSize: 16,
				color: `${values.tertiary.color}`,
			},
			precipText: {
				fontSize: 16,
				color: `${values.tertiary.color}`,
			},
			precipNumber: {
				fontSize: 20,
				fontFamily: `${values.tertiary.font}`,
				color: `${values.primary.color}`,
				lineHeight: 1
			}
		};

		if (!conditions) {
			return ( <div>loading current conditions...</div>)
		}

		return (
			<div style={styles.root}>
				<div style={styles.title}>
					<span>
						{conditions}
					</span>
					<img src={iconUrl}></img>
				</div>
				<div>
					<span style={styles.tempNumber}>{temp}&deg;</span>
					<span style={styles.tempText}> feels like </span>
					<span style={styles.tempNumber}> {feelsLikeTemp}&deg;</span>
				</div>
				<div>
					<span style={styles.precipText}>precip amount: </span>
					<span style={styles.precipNumber}>{precip}"</span>
				</div>
			</div>
		);
	}
}

function mapStateToProps({values}) {
	return { values };
}

export default connect(mapStateToProps)(WeatherCurrentConditionsCard);
