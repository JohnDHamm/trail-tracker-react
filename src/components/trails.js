import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from './navbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {GridList, GridTile} from 'material-ui/GridList';
// import FontIcon from 'material-ui/FontIcon';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import ActionInfoOutLine from 'material-ui/svg-icons/action/info-outline';
import TrailsSelectCard from './trails_select_card';

// const styles = {
// 	root: {
// 		display: 'flex',
// 		flexWrap: 'wrap',
// 		justifyContent: 'space-around'
// 	},
// 	gridList: {
//     overflowY: 'auto'
// 	},
// };

class Trails extends Component {

	renderTrails() {
		return _.map(this.props.trails, trail => {
			const trailURL = `/trail/${trail.id}`;
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

