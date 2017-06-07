import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<Toolbar>
	        <ToolbarGroup firstChild={true}>
	        	<ToolbarTitle text="Trail Tracker" />
	        </ToolbarGroup>
	        <ToolbarGroup>
	        	<ToolbarTitle text="Something" />
						<ToolbarSeparator />
	          <FlatButton label="Button" primary={true} />
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
