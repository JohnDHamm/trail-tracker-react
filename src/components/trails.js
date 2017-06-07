import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';


class Trails extends Component {

	renderTrails() {
		return _.map(this.props.trails, trail => {
			const trailURL = `/trail/${trail.id}`;
			return (
				<ListItem primaryText={trail.name} href={trailURL} key={trail.id} />
			);
		});
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<h2 className="title-test">Trails select</h2>
					<List>
						{this.renderTrails()}
					</List>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps (state) {
	return { trails: state.trails };
}

export default connect (mapStateToProps)(Trails);

