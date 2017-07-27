import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrailsSelectCard extends Component {

	render () {
		const { trailName, location, style, photoUrl, values } = this.props;
		const styles = {
			root: {
				marginTop: 20,
				position: 'relative',
				borderRadius: 2
			},
			bottom: {
				position: 'absolute',
				width: '100%',
				bottom: 0,
				left: 0,
				backgroundColor: 'rgba(255,255,255,0.8)',
				padding: '5px 10px',
				borderRadius: '0 0 2px 2px',
				zIndex: 10
			},
			trailName: {
				color: `${values.primary.color}`,
				fontFamily: `${values.tertiary.font}`,
				fontSize: 25,
				fontWeight: '300',
				textShadow: `1px 1px 0 ${values.tertiary.color}`
			},
			location: {
				color: `${values.tertiary.color}`,
				fontFamily: `${values.secondary.font}`,
				fontSize: 18,
			},
			photo: {
				borderRadius: 2,
				width: '100%'
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.bottom}>
					<div style={styles.trailName}>
						{trailName}
					</div>
					<div style={styles.location}>
						{location}
					</div>
				</div>
				<img
					style={styles.photo}
					src={photoUrl} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailsSelectCard);
