import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTrails } from '../actions';

import TrailsSelectCard from './trails_select_card';


class Trails extends Component {

	componentDidMount() {
		this.props.getTrails();
	}

	renderTrails() {

		return _.map(this.props.trails, trail => {
			const trailURL = `/trail/${trail._id}`;
			const { style, values } = this.props;
			const styles = {
				ticketDiv: {
					position: 'relative'
				},
				ticketBadge: {
					width: 20,
					height: 20,
					borderRadius: '50%',
					backgroundColor: `${values.openTicket.color}`,
					color: 'white',
					position: 'absolute',
					top: -10,
					right: -10,
					zIndex: 10,
					textAlign: 'center',
					fontSize: 15,
					fontFamily: `${values.secondary.font}`
				}
			};

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
						<div style={styles.ticketDiv}>
							<div style={styles.ticketBadge}>
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
			<div>
				<div className="container">
					<div className="row">
						{this.renderTrails()}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps ({trails, values}) {
	return { trails, values };
}

export default connect (mapStateToProps, { getTrails })(Trails);

