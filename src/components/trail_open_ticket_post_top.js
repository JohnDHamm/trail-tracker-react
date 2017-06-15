import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FontIcon from 'material-ui/FontIcon';


function getStyles(props, context) {
	const {TrailOpenTicketPostTop} = context.muiTheme;
	const {values} = props;

	return {
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
}

class TrailOpenTicketPostTop extends Component {
	static muiName = 'TrailOpenTicketPostTop';

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
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<FontIcon className="material-icons" color="white">report_problem</FontIcon>
				<div style={prepareStyles(Object.assign(styles.text, style))}>
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
