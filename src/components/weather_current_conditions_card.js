import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function getStyles(props, context) {
	const {WeatherCurrentConditionsCard} = context.muiTheme;
	const {values} = props;

	return {
		root: {
			// padding: '5px 10px 2px 10px',
			backgroundColor: 'white',
			// display: 'flex',
			// alignItems: 'center'
			paddingLeft: 5,
			width: '100%'
		},
		title: {
			// color: 'white',
			fontSize: 16,
			fontFamily: `${values.primary.font}`,
		},
		temp: {

		},
		rain: {

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
					<div>
						{conditions}
					</div>
					<div>
						<img src={iconUrl}></img>
					</div>
				</div>
				<div style={prepareStyles(Object.assign(styles.temp, style))}>
					{temp} feels like {feelsLikeTemp}
				</div>
				<div style={prepareStyles(Object.assign(styles.rain, style))}>
					rain chance: {precip} in
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(WeatherCurrentConditionsCard);
