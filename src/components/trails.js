import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTrails } from '../actions';

import Navbar from './navbar'
import TrailsSelectCard from './trails_select_card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Trails extends Component {

	componentDidMount() {
		this.props.fetchTrails();
	}

	renderTrails() {
		return _.map(this.props.trails, trail => {
			const trailURL = `/trail/${trail._id}`;

			if (trail.numOpenTickets < 1) {
				return (
					<div className="col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0" key={trail._id}>
						<Link to={trailURL}>
							<TrailsSelectCard
								trailName={trail.name}
								location={trail.location}
								photoUrl={trail.imgUrl} />
						</Link>
					</div>
				);
			} else {
				return (
					<div className="col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0" key={trail._id}>
						<div className="trailWithTicketDiv">
							<div className="ticketBadge">
								{trail.numOpenTickets}
							</div>
							<Link to={trailURL}>
								<TrailsSelectCard
									trailName={trail.name}
									location={trail.location}
									photoUrl={trail.imgUrl} />
							</Link>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		// console.log("this.props.trails", this.props.trails);
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<div className="container">
						<div className="row">
							{this.renderTrails()}
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps (state) {
	return { trails: state.trails };
}

export default connect (mapStateToProps, { fetchTrails })(Trails);

