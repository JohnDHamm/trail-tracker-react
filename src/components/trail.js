import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './navbar'
import TrailTitleCard from './trail_title_card';
import TrailAddPostButton from './trail_add_post_button';
import TrailPostCard from './trail_post_card';
import TrailPostCardPhoto from './trail_post_card_photo';
// import DialogExampleSimple from './test_photo_dialog';
import TrailCloseTicketButton from './trail_close_ticket_button';
import TrailOpenTicketPostTop from './trail_open_ticket_post_top';
import GoogleMap from './google_map';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';


class Trail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params; //get from url
		// this.props.fetchPost(id);

	}

	addPost() {
		console.log("clicked on add new post");
	}

	closeTicket (id) {
		console.log("close ticket id:", id);
	}

	renderPosts () {
		return this.props.posts.map(post => {
			const postStyle = `post-card post-style-${post.postTypeString}`;
			if (post.hasPhoto) {

				if (post.ticketopen) {
					return (
						<div className={postStyle} key={post.id}>
							<TrailOpenTicketPostTop />
							<TrailPostCardPhoto
								userImgUrl={post.userImgUrl}
								postUserName={post.userName}
								date={post.postFormatDate}
								message={post.description}
								photoUrl={post.photoUrl} />
							<div className="closeTicketDiv">
								<div className="closeTicketBtn" onClick={() => this.closeTicket(post.id)}>
									<TrailCloseTicketButton />
								</div>
							</div>
						</div>
					)
				} else {
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
				}

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
		// console.log("trail", trail);

		if (!trail) {
			return <div>Loading...</div>;
		}

		return (
			<MuiThemeProvider>
				<div>
					<Navbar />
					<div className="container">
						<div className="row">
							<div id="leftSide" className="col-lg-4 col-md-4 hidden-sm-down">
								<div>
									<TrailTitleCard title={trail.name} />
								</div>
								<div className="mapDiv">
									<GoogleMap lon={trail.longitude} lat={trail.latitude} zoom={trail.mapZoom} />
								</div>
							</div>
							<div id="center" className="col-lg-6 col-md-8">
								<div className="hidden-md-up">
									<TrailTitleCard title={trail.name} />
								</div>
								<div className="addPostDiv">
									<div onClick={() => this.addPost()}>
										<TrailAddPostButton  />
									</div>
								</div>
								<div className="postsDiv">
									{this.renderPosts()}
								</div>
							</div>
							<div id="rightSide" className="col-lg-2 hidden-md-down test-div-fill">
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

