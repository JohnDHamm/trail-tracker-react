import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar'
import TrailTitleCard from './trail_title_card';
import TrailPostCard from './trail_post_card';
import TrailPostCardPhoto from './trail_post_card_photo';

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
			if (post.hasPhoto) {
				return (
					<div className={postStyle} key={post.id}>
						<TrailPostCardPhoto
							userImgUrl={post.userImgUrl}
							postUserName={post.userName}
							date={post.postFormatDate}
							message={post.description}
							photoUrl={post.photoUrl} />
					</div>
				)
			} else {
				return (
					<div className={postStyle} key={post.id}>
						<TrailPostCard
							userImgUrl={post.userImgUrl}
							postUserName={post.userName}
							date={post.postFormatDate}
							message={post.description}/>
					</div>
				)
			}
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
							<div id="leftSide" className="col-lg-4 test-div-fill">
								Left side
							</div>
							<div id="center" className="col-lg-6 test-div-fill">
								<div>
									<TrailTitleCard title={trail.name} />
								</div>
								<div>
									add post component goes here
								</div>
								<div className="postsDiv">
									{this.renderPosts()}
								</div>
							</div>
							<div id="rightSide" className="col-lg-2 test-div-fill">
								Right side
							</div>
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
