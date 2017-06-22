import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class Navbar extends Component {

	render() {
		const { user } = this.props.user;
		const { values } = this.props;

		return (
			<MuiThemeProvider>
				<Toolbar style={{backgroundColor: `${values.primary.color}`}}>
					<ToolbarGroup firstChild={true}>
						<FlatButton
							label="Trail Tracker"
							labelStyle={{fontFamily: `${values.primary.font}`, fontSize: 20}}
							style={{color: 'white'}}
							hoverColor="rgba(0,0,0,0.1)"
							href="/" />
					</ToolbarGroup>
					<ToolbarGroup>
						<FlatButton
							label="Trails"
							labelStyle={{fontFamily: `${values.primary.font}`}}
							style={{color: 'white'}}
							hoverColor="rgba(0,0,0,0.1)"
							href="/trails"
							icon={<FontIcon className="material-icons">directions_bike</FontIcon>} />

						<ToolbarTitle
							text={user.name}
							style={{
								color: `${values.secondary.color}`,
								fontFamily: `${values.tertiary.font}`,
								fontSize: 25
							}}
						/>
						<Avatar
							size={30}
							src={user.iconUrl}
							/>
					</ToolbarGroup>
				</Toolbar>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ user, values }) {
	return { user, values };
}

export default connect(mapStateToProps)(Navbar);
