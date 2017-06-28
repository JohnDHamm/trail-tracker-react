import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';

function getStyles(props, context) {
	const {TrailSteward} = context.muiTheme;
	const {values} = props;

	return {
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
			fontWeight: '300'
		}
	};
}

class TrailSteward extends Component {
	static muiName = 'TrailSteward';

	static propTypes = {
		stewardName: PropTypes.node,
		style: PropTypes.object,
		stewardImgUrl: PropTypes.string
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { stewardName, style, stewardImgUrl } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.title, style))}>Trail steward:
				</div>
				<div style={prepareStyles(Object.assign(styles.steward, style))}>
					<Avatar
						size={30}
						src={stewardImgUrl}
						/>
					<div style={prepareStyles(Object.assign(styles.userName, style))}>
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
