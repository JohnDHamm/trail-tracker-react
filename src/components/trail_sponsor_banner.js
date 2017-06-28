import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function getStyles(props, context) {
	const {TrailSponsor} = context.muiTheme;
	const {values} = props;

	return {
		root: {
			padding: '5px',
			backgroundColor: 'rgba(158,157,36,0.4)',
			borderRadius: 2,
			marginTop: 8,
			width: '100%'
		},
		title: {
			paddingLeft: 5,
			color: `${values.tertiary.color}`,
			fontFamily: `${values.secondary.font}`,
			fontSize: 16
		},
		logo: {
			maxWidth: '100%'
		}
	};
}

class TrailSponsor extends Component {
	static muiName = 'TrailSponsor';

	static propTypes = {
		style: PropTypes.object,
		sponsorLogo: PropTypes.node,
		sponsorUrl: PropTypes.string,
	};

	static contextTypes = {
		muiTheme: PropTypes.object.isRequired,
	};

	render () {
		const { sponsorLogo, style, sponsorUrl } = this.props;
		const {prepareStyles} = this.context.muiTheme;
		const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.title, style))}>Trail sponsor:
				</div>
				<div>
					<a href={sponsorUrl} target="_blank">
						<img
							style={prepareStyles(Object.assign(styles.logo, style))}
							src={sponsorLogo} />
					</a>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailSponsor);
