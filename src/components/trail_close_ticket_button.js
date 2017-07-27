import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontIcon from 'material-ui/FontIcon';


class TrailCloseTicketButton extends Component {

	render () {
		const { style } = this.props;
		const styles = {
			root: {
				display: 'flex',
				alignItems: 'center',
				color: '#666',
				cursor: 'pointer',
				paddingRight: 10
			},
			text: {
				fontSize: 12,
				paddingRight: 5
			}
		};

		return (
			<div>
				<div style={styles.root}>
					<div style={styles.text}>
						Close ticket
					</div>
					<FontIcon className="material-icons" color="#666">build</FontIcon>
				</div>
			</div>
		);

	}
}

export default TrailCloseTicketButton;
