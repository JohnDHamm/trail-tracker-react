import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

class TrailSteward extends Component {

	render () {
		const { stewardName, style, stewardImgUrl, values } = this.props;
		const styles = {
			root: {
				padding: '5px 10px 10px 10px',
				backgroundColor: 'rgba(158,157,36,0.4)',
				borderRadius: 2,
				marginTop: 8,
				width: '100%'
			},
			title: {
				color: `${values.tertiary.color}`,
				fontFamily: `${values.secondary.font}`,
				fontSize: 16
			},
			steward: {
				display: 'flex',
				alignItems: 'center'
			},
			userName: {
				color: 'white',
				fontFamily: `${values.tertiary.font}`,
				fontSize: 20,
				paddingLeft: 5,
				fontWeight: '300',
				textShadow: `1px 1px 0 ${values.tertiary.color}`
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.title}>Trail steward:
				</div>
				<div style={styles.steward}>
					<Avatar
						size={30}
						src={stewardImgUrl}
						/>
					<div style={styles.userName}>
						{stewardName}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailSteward);
