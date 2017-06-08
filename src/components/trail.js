import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrailTitleCard from './trail_title_card';

import Navbar from './navbar'
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
					<div className="container">
						<div className="row">
							<div className="col-lg-4 test-div-fill">Left side</div>
							<div className="col-lg-6 test-div-fill">
								<TrailTitleCard title={trail.name} subheader={trail.location} />
							</div>
							<div className="col-lg-2 test-div-fill">Right side</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ trails }, ownProps) {
	return { trail: trails[ownProps.match.params.id] };
}

export default connect(mapStateToProps)(Trail);
