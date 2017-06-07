import React, { Component } from 'react';

import Navbar from './navbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<h2 className="title-test">Home</h2>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Home;
