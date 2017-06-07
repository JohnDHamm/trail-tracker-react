import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class Navbar extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<Toolbar>
					<ToolbarGroup firstChild={true}>
						<FlatButton label="Trail Tracker"
							href="/" />
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarTitle text="Something" />
						<ToolbarSeparator />
						<FlatButton label="Trails"
							href="/trails"
							icon={<FontIcon className="material-icons">directions_bike</FontIcon>} />
						<IconMenu
							iconButtonElement={
								<IconButton touch={true}>
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

export default Navbar;
