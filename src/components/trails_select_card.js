import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function getStyles(props, context) {
	const {TrailsSelectCard} = context.muiTheme;
	const {values} = props;

	return {
		root: {
			marginTop: 20,
			position: 'relative',
			borderRadius: 2
		},
		bottom: {
			position: 'absolute',
			width: '100%',
			bottom: 0,
			left: 0,
			backgroundColor: 'rgba(255,255,255,0.8)',
			padding: '5px 10px',
			borderRadius: '0 0 2px 2px',
			zIndex: 10
		},
		trailName: {
			color: `${values.primary.color}`,
			fontFamily: `${values.tertiary.font}`,
			fontSize: 25,
			fontWeight: '300',
			textShadow: `1px 1px 0 ${values.tertiary.color}`
		},
		location: {
			color: `${values.tertiary.color}`,
			fontFamily: `${values.secondary.font}`,
			fontSize: 18,
		},
		photo: {
			borderRadius: 2,
			width: '100%'
		}
	};
}

class TrailsSelectCard extends Component {
	static muiName = 'TrailsSelectCard';

	static propTypes = {
		trailName: PropTypes.node,
		location: PropTypes.node,
		style: PropTypes.object,
		photoUrl: PropTypes.string
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { trailName, location, style, photoUrl } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.bottom, style))}>
					<div style={prepareStyles(Object.assign(styles.trailName, style))}>
						{trailName}
					</div>
					<div style={prepareStyles(Object.assign(styles.location, style))}>
						{location}
					</div>
				</div>
				<img
					style={prepareStyles(Object.assign(styles.photo, style))}
					src={photoUrl} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailsSelectCard);
