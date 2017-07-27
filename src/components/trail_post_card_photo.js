import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';


class TrailPostCardPhoto extends Component {

	render () {
		const { postUserName, date, message, style, userImgUrl, photoUrl, values } = this.props;
		const styles =  {
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

		return (
			<div style={styles.root}>
				<div style={styles.top}>
					<Avatar
						size={30}
						src={userImgUrl}
						/>
					<div style={styles.userName}>
						{postUserName}
					</div>
					<div style={styles.date}>
						{date}
					</div>
				</div>
				<div style={styles.message}>
					{message}
				</div>
				<a target="_blank" href={photoUrl}>
					<img
						style={styles.photo}
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
