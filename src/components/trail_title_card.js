import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TrailTitleCard extends Component {

	static propTypes = {
		title: PropTypes.node,
		subheader: PropTypes.node
	};

	render () {

		const { title, subheader } = this.props;

		return (
			<div className="row">
				<div className="col">
					<h2 className="title-test">{title}</h2>
					<h4 className="title-test">{subheader}</h4>
					<p>sponsorship goes here</p>
				</div>
			</div>
		);
	}
}


export default TrailTitleCard;




