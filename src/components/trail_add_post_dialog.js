import React, { Component } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

import { addPost,
				getPosts,
				updateTrailTicketCount,
				uploadS3Photo } from '../actions';

import TrailAddPostButton from './trail_add_post_button';
import PhotoUpload from './photo_upload';
import AddPhotoTempSnackbar from './trail_add_photo_snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class AddPostDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			msg: '',
			postType: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	componentDidMount() {
		const currentUser = this.props.user.user;
		this.setState({userName: currentUser.name, userImgUrl: currentUser.iconUrl, userId: currentUser._id});
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.clearState();
	};

	handlePost = () => {
		const trailId = this.props.currentTrail._id;
		const timeStamp = new Date();
		const newPost = {
			description: this.state.msg,
			postTypeString: this.state.postType,
			userName: this.state.userName,
			userImgUrl: this.state.userImgUrl,
			userId: this.state.userId,
			hasPhoto: false,
			photoUrl: '',
			postDate: timeStamp,
			postTrailId: trailId,
		};
		newPost.postFormatDate = this.formatDate(timeStamp);
		newPost.ticketopen = this.state.postType === 'open-ticket' ? true : false;
		const uploadFile = this.props.uploadPhoto;
		if (uploadFile.length > 0) {
			superagent.post(`https://trailtracker-api.herokuapp.com/api/photoupload/${this.state.postType}`)
      .attach('theseNamesMustMatch', uploadFile[0])
      .end((err, res) => {
        if (err) console.log(err);
        // alert('File uploaded!');
        console.log("res", res);
      })
			const uploadFileName = uploadFile[0].name;
			// console.log("uploadFileName", uploadFileName);
			newPost.hasPhoto = true;
			newPost.photoUrl = `https://s3.us-east-2.amazonaws.com/johndhammcodes.trailtracker/${this.state.postType}/${uploadFileName}`;
		}
		// console.log("newPost", newPost);

		this.props.addPost(newPost, () => {
			this.clearState();
			if (newPost.ticketopen) {
				const newNumOpenTickets = this.props.currentTrail.numOpenTickets + 1;
				const trailUpdateObj = {
					_id: trailId,
					numOpenTickets: newNumOpenTickets
				};
				this.props.updateTrailTicketCount(trailUpdateObj, () => {
					this.props.getPosts(trailId);
				})
			} else {
				this.props.getPosts(trailId);
			}
		})
	};

	clearState = () => {
		this.setState({
			open: false,
			msg: '',
			postType: ''
		});
	}

	formatDate (newDate) {
		var now = newDate;
		var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
		var time = [ now.getHours(), now.getMinutes() ];
		var suffix = ( time[0] < 12 ) ? "AM" : "PM";
		time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
		time[0] = time[0] || 12;
		for ( var i = 1; i < 2; i++ ) {
			if ( time[i] < 10 ) {
				time[i] = "0" + time[i];
			}
		}
		return date.join("/") + " - " + time.join(":") + " " + suffix;
	};

	handleChange(event, value) {
		this.setState({
			msg: value
		});
	}

	handleSelectChange(event, index, value) {
		this.setState({
			postType: value
		});

	}

	render() {
		const {values} = this.props;

		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
				labelStyle={{color: `${values.openTicket.color}`}}
			/>,
			<FlatButton
				label="Post"
				primary={true}
				labelStyle={{color: `${values.primary.color}`}}
				onTouchTap={this.handlePost}
			/>
		];

		return (
			<div>
				<div onClick={this.handleOpen}>
					<TrailAddPostButton />
				</div>
				<Dialog
					title="Select the type of post and add a message"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<SelectField
						name="postType"
						floatingLabelText="Post type"
						autoWidth={true}
						value={this.state.postType}
						onChange={this.handleSelectChange}
					>
						<MenuItem value={"meetup"} primaryText="Meetup - organize a group ride" />
						<MenuItem value={"ride-report"} primaryText="Ride Report - trail conditions (non-critical)" />
						<MenuItem value={"open-ticket"} primaryText="Open Ticket - for issues that need repair" />
					</SelectField>
					<br/>
					<TextField
						name="msg"
						hintText="Type message here"
						fullWidth={true}
						value={this.state.msg}
						onChange={this.handleChange}
						autoFocus={true}
					/>
					<br/>
					<PhotoUpload />

				</Dialog>
			</div>
		);
	}
}

function mapStateToProps({values, user, currentTrail, uploadPhoto}) {
	return { values, user, currentTrail, uploadPhoto};
}

export default connect(mapStateToProps, {addPost, getPosts, updateTrailTicketCount, uploadS3Photo })(AddPostDialog);
