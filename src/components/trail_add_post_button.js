import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FontIcon from 'material-ui/FontIcon';

function getStyles(props, context) {
	const {TrailAddPostButton} = context.muiTheme;

	return {
		root: {
			display: 'flex',
			alignItems: 'center',
			cursor: 'pointer',
			color: '#666'
		},
		text: {
			fontSize: 15,
			paddingLeft: 5
		}
	}
}

class TrailAddPostButton extends Component {
	static muiName = 'TrailAddPostButton';

	static propTypes = {
		style: PropTypes.object
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {

		const { postUserName, style } = this.props;

		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
					<FontIcon className="material-icons" color="#666">add_circle</FontIcon>
					<div style={prepareStyles(Object.assign(styles.text, style))}>
						Add a new post
					</div>
			</div>
		);

	}
}

export default TrailAddPostButton;
