import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

function getStyles(props, context) {
	const {TrailPostCardPhoto} = context.muiTheme;
	const {values} = props;

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
			color: `${values.primary.color}`,
			fontFamily: `${values.tertiary.font}`,
			fontSize: 20,
			paddingLeft: 5,
			fontWeight: '300'
		},
		date: {
			color: `${values.primary.color}`,
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
		const { postUserName, date, message, style, userImgUrl, photoUrl } = this.props;
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
				<a target="_blank" href={photoUrl}>
					<img
						style={prepareStyles(Object.assign(styles.photo, style))}
						src={photoUrl} />
				</a>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailPostCardPhoto);
