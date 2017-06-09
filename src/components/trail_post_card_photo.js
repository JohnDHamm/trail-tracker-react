import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {
	amber400,
	lime800,
	lime900
} from 'material-ui/styles/colors';


function getStyles(props, context) {
	const {TrailPostCardPhoto} = context.muiTheme;

	const userNameColor = '#9e9d24';

	return {
		root: {
			padding: 10,
			borderRadius: 2
		},
		top: {
			display: 'flex',
			alignItems: 'center'
		},
		userName: {
			color: `${lime900}`,
			fontSize: 14,
			paddingLeft: 5,
			fontWeight: '300'
		},
		date: {
			fontSize: 12,
			fontWeight: '300',
			marginLeft: 'auto'
		},
		message: {
			paddingTop: 10,
			fontSize: 15,
			fontWeight: '400',
			lineHeight: 1.3
		},
		photo: {
			width: '100%',
			paddingTop: 5
		}
	};
}


class TrailPostCardPhoto extends Component {
	static muiName = 'TrailPostCardPhoto';

	static propTypes = {
		postUserName: PropTypes.node,
		date: PropTypes.node,
		message: PropTypes.node,
		style: PropTypes.object,
		userImgUrl: PropTypes.string,
		photoUrl: PropTypes.string
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {

		const { postUserName, date, message, style, userImgUrl, photoUrl, src } = this.props;

		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.top, style))}>
					<Avatar
						size={30}
						src={userImgUrl}
						/>
					<div style={prepareStyles(Object.assign(styles.userName, style))}>
						{postUserName}
					</div>
					<div style={prepareStyles(Object.assign(styles.date, style))}>
						{date}
					</div>
				</div>
				<div style={prepareStyles(Object.assign(styles.message, style))}>
					{message}
				</div>
				<img
					style={prepareStyles(Object.assign(styles.photo, style))}
					src={photoUrl} />
			</div>
		);

	}
}


export default TrailPostCardPhoto;
