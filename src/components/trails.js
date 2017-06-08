import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from './navbar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import ActionInfoOutLine from 'material-ui/svg-icons/action/info-outline';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	},
	gridList: {
    overflowY: 'auto'
	},
};

class Trails extends Component {

	renderTrails() {
		return _.map(this.props.trails, trail => {
			const trailURL = `/trail/${trail.id}`;
			return (
				<Link to={trailURL} key={trail.id}>
					<GridTile
						title={trail.name}
						subtitle={trail.location}
						actionIcon={<IconButton><ActionInfoOutLine color="white" /></IconButton>}
					>
						<img src={trail.imgUrl} />
					</GridTile>
				</Link>
			);
		});
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<div className="container" style={styles.root}>
						<GridList cellHeight={180} cols={4} style={styles.gridList}>
							<Subheader>Favorites:</Subheader>
								{this.renderTrails()}
						</GridList>
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

