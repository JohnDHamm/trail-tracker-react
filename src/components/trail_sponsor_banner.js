import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrailSponsor extends Component {

	render () {
		const { sponsorLogo, style, sponsorUrl, values } = this.props;
		const styles = {
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

		return (
			<div style={styles.root}>
				<div style={styles.title}>Trail sponsor:
				</div>
				<div>
					<a href={sponsorUrl} target="_blank">
						<img
							style={styles.logo}
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
