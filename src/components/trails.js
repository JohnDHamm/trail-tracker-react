import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from './navbar'
import TrailsSelectCard from './trails_select_card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Trails extends Component {

	renderTrails() {
		return _.map(this.props.trails, trail => {
			const trailURL = `/trail/${trail.id}`;

			if (trail.numOpenTickets < 1) {
				return (
					<div className="col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0" key={trail.id}>
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
					<div className="col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0" key={trail.id}>
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

export default connect (mapStateToProps)(Trails);

