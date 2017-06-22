import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends Component {

	render() {
		const { user } = this.props.user;
		const { values } = this.props;
		return (
			<MuiThemeProvider>
				<div>
					<div id="home" className="container">
						<div className="row justify-content-center">
							<div className="col">
								<h1 className="appTitle">Trail Tracker</h1>
							</div>
						</div>
						<div className="row justify-content-center">
							<div id="appDescription" className="col">
								<p>An app for the mountain biking community.</p>
								<p>Check trail conditions.</p>
								<p>Post future ride plans.</p>
								<p>Have fun.</p>
							</div>
						</div>
						<div className="row justify-content-center">
							<div id="homeBottom" className="col">
								<p>Demo: You are logged in as <span className="userName">{user.name}</span></p>
							</div>
						</div>
						<div className="row justify-content-center">
							<FlatButton
								label="Select a trail"
								backgroundColor={`${values.secondary.color}`}
								hoverColor="white"
								icon={<FontIcon className="material-icons" color={`${values.primary.color}`}>directions_bike</FontIcon>}
								href="/trails"
								labelStyle={{color: `${values.primary.color}`, fontFamily: `${values.primary.font}`}}
							/>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ user, values }) {
	return { user, values };
}

export default connect(mapStateToProps)(Home);
