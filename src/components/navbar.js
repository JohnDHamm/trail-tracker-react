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
import {
	lime800,
	lime900
} from 'material-ui/styles/colors';

class Navbar extends Component {

	render() {
		const { user } = this.props.user;

		return (
			<MuiThemeProvider>
				<Toolbar style={{backgroundColor: lime800}}>
					<ToolbarGroup firstChild={true}>
						<FlatButton
							label="Trail Tracker"
							style={{color: 'white'}}
							hoverColor={lime900}
							href="/" />
					</ToolbarGroup>
					<ToolbarGroup>
						<FlatButton
							label="Trails"
							style={{color: 'white'}}
							hoverColor={lime900}
							href="/trails"
							icon={<FontIcon className="material-icons">directions_bike</FontIcon>} />

						<ToolbarTitle text={user.name} style={{color: 'white'}} />
						<Avatar
							size={30}
							src={user.iconUrl}
							/>
						<IconMenu
							iconStyle={{color: 'white'}}
							iconButtonElement={
								<IconButton
									touch={true}>
									<MoreVertIcon />
								</IconButton>
							}
							targetOrigin={{horizontal: 'right', vertical: 'top'}}
							anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						>
							<MenuItem primaryText="Menu 1" />
							<MenuItem primaryText="Menu 2" />
						</IconMenu>
					</ToolbarGroup>
				</Toolbar>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ user }) {
	return { user: user };
}

export default connect(mapStateToProps)(Navbar);
