import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getUser } from '../actions';

import Navbar from './navbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {

	render() {
		// console.log("user", this.props.user);
		const { user } = this.props.user;
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<div className="container">
						<h2 className="title-test">Home/demo</h2>
						<p>You are logged in as {user.name}</p>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

// export default Home;

function mapStateToProps({ user }) {
	return { user: user };
}

export default connect(mapStateToProps)(Home);
