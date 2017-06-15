import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function getStyles(props, context) {
	const {WeatherCurrentConditionsCard} = context.muiTheme;
	const {values} = props;

	return {
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
}

class WeatherCurrentConditionsCard extends Component {
	static muiName = 'WeatherCurrentConditionsCard';

	static propTypes = {
		style: PropTypes.object,
		conditions: PropTypes.node,
		iconUrl: PropTypes.string,
		temp: PropTypes.node,
		feelsLikeTemp: PropTypes.node,
		precip: PropTypes.node
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { style, conditions, iconUrl, temp, feelsLikeTemp, precip } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.title, style))}>
					<span>
						{conditions}
					</span>
					<img src={iconUrl}></img>
				</div>
				<div>
					<span style={prepareStyles(Object.assign(styles.tempNumber, style))}>{temp}&deg;</span>
					<span style={prepareStyles(Object.assign(styles.tempText, style))}> feels like </span>
					<span style={styles.tempNumber}> {feelsLikeTemp}&deg;</span>
				</div>
				<div>
					<span style={prepareStyles(Object.assign(styles.precipText, style))}>precip amount: </span>
					<span style={prepareStyles(Object.assign(styles.precipNumber, style))}>{precip}"</span>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(WeatherCurrentConditionsCard);
