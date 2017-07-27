import React, { Component } from 'react';
import { connect } from 'react-redux';

import FontIcon from 'material-ui/FontIcon';


class TrailOpenTicketPostTop extends Component {

	render () {
		const { style, values } = this.props;
		const styles = {
			root: {
				padding: 2,
				backgroundColor: `${values.openTicket.color}`,
				display: 'flex',
				alignItems: 'center'
			},
			text: {
				color: 'white',
				fontSize: 18,
				fontFamily: `${values.primary.font}`,
				paddingLeft: 5
			}
		};
		return (
			<div style={styles.root}>
				<FontIcon className="material-icons" color="white">report_problem</FontIcon>
				<div style={styles.text}>
					Trail Issue
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailOpenTicketPostTop);
