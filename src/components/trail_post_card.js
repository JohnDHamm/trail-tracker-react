import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';



class TrailPostCard extends Component {

	static propTypes = {
		postUserName: PropTypes.node,
		date: PropTypes.node,
		message: PropTypes.node,
		leftBorderStyle: PropTypes.node
	};

	render () {

		const { postUserName, date, message, leftBorderStyle } = this.props;

		return (
			<div>
					<span>
		        <Avatar icon={<FontIcon className="material-icons">directions_bike</FontIcon>} />
					  {postUserName}
					  {date}
					</span>
					<p>{message}</p>
			</div>
		);
	}
}


export default TrailPostCard;
