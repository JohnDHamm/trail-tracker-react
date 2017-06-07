import React, { Component } from 'react';

import Navbar from './navbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Trails extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<h2 className="title-test">Trails select</h2>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Trails;
