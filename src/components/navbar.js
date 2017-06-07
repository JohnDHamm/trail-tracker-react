import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';



class Navbar extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<AppBar
					title={<span>Title</span>}
					iconElementRight={<FlatButton label="Button" />}
				/>
			</MuiThemeProvider>
		);
	}
}

export default Navbar;
