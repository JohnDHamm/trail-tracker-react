import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar'
import TrailTitleCard from './trail_title_card';
import TrailPostCard from './trail_post_card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


class Trail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params; //get from url
		// this.props.fetchPost(id);

	}

	renderPosts () {
		return this.props.posts.map(post => {
			const postStyle = `post-card post-style-${post.postTypeString}`;
			return (
				<div className={postStyle} key={post.id}>
					<TrailPostCard
						userImgUrl={post.userImgUrl}
						postUserName={post.userName}
						date={post.postFormatDate}
						message={post.description} />
				</div>
			)
		})
	}

	render() {
		const { trail, posts } = this.props;

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
								<div>
									<p>posts:</p>
										{this.renderPosts()}
								</div>
							</div>
							<div className="col-lg-2 test-div-fill">Right side</div>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ trails, posts }, ownProps) {
	return { trail: trails[ownProps.match.params.id], posts: posts };
}

export default connect(mapStateToProps)(Trail);
