import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {
  amber400,
  lime800,
  lime900
} from 'material-ui/styles/colors';

console.log("lime800", lime800);

function getStyles(props, context) {
  const {TrailPostCard} = context.muiTheme;

  const userNameColor = '#9e9d24';

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
    	color: `${lime900}`,
    	fontSize: 14,
    	paddingLeft: 5,
    	fontWeight: '300'
    },
    date: {
    	fontSize: 12,
    	fontWeight: '300',
    	marginLeft: 'auto'
    },
    message: {
    	paddingTop: 10,
    	fontSize: 15,
    	fontWeight: '400',
    	lineHeight: 1.3
    }
  };
}


class TrailPostCard extends Component {
	static muiName = 'TrailPostCard';

	static propTypes = {
		postUserName: PropTypes.node,
		date: PropTypes.node,
		message: PropTypes.node,
		style: PropTypes.object
	};

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

	render () {

		const { postUserName, date, message, style } = this.props;

		const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

		return (
			<div style={prepareStyles(Object.assign(styles.root, style))}>
				<div style={prepareStyles(Object.assign(styles.top, style))}>
	        <Avatar
	        	size={30}
	        	color={amber400}
	          backgroundColor={lime800}
	        	icon={<FontIcon className="material-icons">directions_bike</FontIcon>}
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
			</div>
		);
	}
}


export default TrailPostCard;
