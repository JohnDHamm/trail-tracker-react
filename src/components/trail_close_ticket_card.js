import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontIcon from 'material-ui/FontIcon';

function getStyles(props, context) {
	const {TrailCloseTicketCard} = context.muiTheme;

	return {
		root: {
			paddingLeft: 10,
			paddingBottom: 10,
			borderRadius: 2,
			display: 'flex',
			alignItems: 'center',
			color: '#666',
			// justifyContent: 'flex-end',
			paddingRight: 10
		},
		text: {
			// cursor: 'pointer',
			fontSize: 12,
			paddingRight: 5
		}
	}
}

class TrailCloseTicketCard extends Component {
	static muiName = 'TrailCloseTicketCard';

	static propTypes = {
		style: PropTypes.object
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {

		const { style } = this.props;

		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div>
				<div style={prepareStyles(Object.assign(styles.root, style))}>
					<div style={prepareStyles(Object.assign(styles.text, style))}>
						Close ticket
					</div>
					<FontIcon className="material-icons" color="#666">build</FontIcon>
				</div>
			</div>
		);

	}
}

export default TrailCloseTicketCard;
