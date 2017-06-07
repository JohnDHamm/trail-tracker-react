import React, { Component } from 'react';

import Navbar from './navbar'
import SecondComponentTest from './second_component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Navbar from 'material-ui/NavBar';

class Trail extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<h2 className="title-test">Trail page</h2>
					<SecondComponentTest />
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Trail;
