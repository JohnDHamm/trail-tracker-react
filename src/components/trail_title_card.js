import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrailTitleCard extends Component {

	render () {
		const { title, subheader, style, values } = this.props;
		const styles = {
			root: {
				padding: 5,
				textAlign: 'center'
			},
			title: {
				fontFamily: `${values.tertiary.font}`,
				fontSize: 45,
				color: `${values.primary.color}`,
				textShadow: `2px 2px 0 ${values.tertiary.color}`,
				lineHeight: 0.9
			},
			subheader: {
				fontFamily: `${values.tertiary.font}`,
				fontSize: 20,
				color: `${values.primary.color}`
			}
		};

		return (
				<div style={styles.root}>
					<div style={styles.title}>
						{title}
					</div>
					<div style={styles.subheader}>
						{subheader}
					</div>
				</div>
		);
	}
}

function mapStateToProps(state) {
	return { values: state.values };
}

export default connect(mapStateToProps)(TrailTitleCard);
