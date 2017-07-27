import React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';


class TrailAddPostButton extends Component {

	render () {
		const { postUserName, style } = this.props;
		const styles =  {
			root: {
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				color: '#666'
			},
			text: {
				fontSize: 15,
				paddingLeft: 5
			}
		};

		return (
			<div style={styles.root}>
					<FontIcon className="material-icons" color="#666">add_circle</FontIcon>
					<div style={styles.text}>
						Add a new post
					</div>
			</div>
		);

	}
}

export default TrailAddPostButton;
