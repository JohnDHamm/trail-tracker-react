import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar'
import SecondComponentTest from './second_component';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Trail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params; //get from url
		// this.props.fetchPost(id);
	}

	render() {
		const trail = this.props.trail;

		if (!trail) {
			return <div>Loading...</div>;
		}

		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<h2 className="title-test">{trail.name}</h2>
					<h4 className="title-test">{trail.location}</h4>
					<h6>{trail.description}</h6>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ trails }, ownProps) {
	return { trail: trails[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(Trail);
