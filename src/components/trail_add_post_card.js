import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import FontIcon from 'material-ui/FontIcon';

function getStyles(props, context) {
	const {TrailAddPostCard} = context.muiTheme;

	return {
		root: {
			padding: 10,
			borderRadius: 4,
			backgroundColor: 'white',
			borderLeft: '4px solid #ddd',
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

class TrailAddPostCard extends Component {
	static muiName = 'TrailAddPostCard';

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

export default TrailAddPostCard;
