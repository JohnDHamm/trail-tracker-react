import React, { Component } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

import { addPost,
				getPosts,
				deleteClosedTicket,
				updateTrailTicketCount } from '../actions';

import TrailCloseTicketButton from './trail_close_ticket_button';
import PhotoUpload from './photo_upload';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class TrailCloseTicketDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			msg: ''
		};

		this.handleChange = this.handleChange.bind(this);
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
		const origPost = this.props.ticketToClose;
		const closingMsg = `original issue: "${origPost.description}" by ${origPost.userName} on ${origPost.postFormatDate} has been closed by ${this.state.userName} - "${this.state.msg}" - Beers for all!`;

		const newPost = {
			description: closingMsg,
			postTypeString: 'closed-ticket',
			userName: this.state.userName,
			userImgUrl: this.state.userImgUrl,
			userId: this.state.userId,
			hasPhoto: false,
			photoUrl: '',
			postDate: timeStamp,
			postFormatDate: this.formatDate(timeStamp),
			postTrailId: trailId,
			ticketopen: false
		};

		const uploadFile = this.props.uploadPhoto;
		if (uploadFile.length > 0) {
			const uploadFileName = uploadFile[0].name;
			newPost.hasPhoto = true;
			newPost.photoUrl = `https://s3.us-east-2.amazonaws.com/johndhammcodes.trailtracker/${this.state.postType}/${uploadFileName}`;

			superagent.post(`https://trailtracker-api.herokuapp.com/api/photoupload/${this.state.postType}`)
      .attach('theseNamesMustMatch', uploadFile[0])
      .then((res, err) => {
        if (err) console.log(err);
        // console.log("file uploaded:", res);
      })
      .then(() => {
      	// console.log("next up: close post", newPost);
      	this.props.addPost(newPost, () => {
					// console.log("added post");
					this.clearState();
					// console.log("get posts");
					this.props.getPosts(trailId);
	      })
			})
    } else {
			this.props.addPost(newPost, () => {
				// console.log("no photo, closed post:", newPost);
				this.clearState();
				this.props.getPosts(trailId);
			})
    }

    console.log("delete orig open ticket");
		this.props.deleteClosedTicket(origPost._id, () => {
			// console.log("done deleted, now update count", this.props.currentTrail.numOpenTickets);
			const newNumOpenTickets = this.props.currentTrail.numOpenTickets - 1;
			const trailUpdateObj = {
				_id: trailId,
				numOpenTickets: newNumOpenTickets
			};
			this.props.updateTrailTicketCount(trailUpdateObj, () => {
				// this.props.getPosts(trailId);
				// console.log("updated count!");
			})
		})
	};

	clearState = () => {
		this.setState({
			open: false,
			msg: ''
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
			<div className="closeTicketDialog">
				<div onClick={this.handleOpen}>
					<TrailCloseTicketButton />
				</div>
				<Dialog
					title="Please provide some details about closing this ticket"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<TextField
						name="msg"
						hintText="details"
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

function mapStateToProps({values, user, currentTrail, ticketToClose, uploadPhoto}) {
	return { values, user, currentTrail, ticketToClose, uploadPhoto};
}

export default connect(mapStateToProps, { addPost, getPosts, deleteClosedTicket, updateTrailTicketCount })(TrailCloseTicketDialog);
