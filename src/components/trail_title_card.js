import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	amber400,
	lime800,
	brown900
} from 'material-ui/styles/colors';

function getStyles(props, context) {
	const {TrailTitleCard} = context.muiTheme;

	return {
		root: {
			padding: 5,
			textAlign: 'center'
		},
		title: {
			fontFamily: 'Rancho',
			fontSize: 45,
			color: `${lime800}`,
			textShadow: `2px 2px 0 ${brown900}`
		},
		subheader: {
			fontFamily: 'Rancho',
			fontSize: 20,
			color: `${lime800}`
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


export default TrailTitleCard;




