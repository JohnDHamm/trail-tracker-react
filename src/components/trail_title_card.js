import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function getStyles(props, context) {
	const {TrailTitleCard} = context.muiTheme;
	const {values} = props;

	return {
		root: {
			padding: 5,
			textAlign: 'center'
		},
		title: {
			fontFamily: `${values.tertiary.font}`,
			fontSize: 45,
			color: `${values.primary.color}`,
			textShadow: `2px 2px 0 ${values.tertiary.color}`,
			lineHeight: 0.9
		},
		subheader: {
			fontFamily: `${values.tertiary.font}`,
			fontSize: 20,
			color: `${values.primary.color}`
		}
	};
}

class TrailTitleCard extends Component {

	static muiName = 'TrailTitleCard';

	static propTypes = {
		title: PropTypes.node,
		subheader: PropTypes.node
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { title, subheader, style } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
				<div style={prepareStyles(Object.assign(styles.root, style))}>
					<div style={prepareStyles(Object.assign(styles.title, style))}>
						{title}
					</div>
					<div style={prepareStyles(Object.assign(styles.subheader, style))}>
						{subheader}
					</div>
				</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailTitleCard);
