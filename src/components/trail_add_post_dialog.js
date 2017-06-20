import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

import TrailAddPostButton from './trail_add_post_button';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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
		this.setState({userName: currentUser.name, userImgUrl: currentUser.iconUrl, userId: currentUser._id})
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.clearState();
		console.log("cancelled! state:", this.state);
	};

	handlePost = () => {
		const timeStamp = new Date();
		const newPost = {
			description: this.state.msg,
			postTypeString: this.state.postType,
			userName: this.state.userName,
			userImgUrl: this.state.userImgUrl,
			userId: this.state.userId,
			// postTrailId: '',
			// hasPhoto: false,
			// photoUrl: '',
			postDate: timeStamp,
		};

		newPost.postFormatDate = this.formatDate(timeStamp);
		newPost.ticketopen = this.state.postType === 'open-ticket' ? true : false;
		console.log("newPost:", newPost);

		this.props.addPost(newPost)
			.then(() => console.log("new post saved"));
		this.clearState();
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
		var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
		var suffix = ( time[0] < 12 ) ? "AM" : "PM";
		time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
		time[0] = time[0] || 12;
		for ( var i = 1; i < 3; i++ ) {
			if ( time[i] < 10 ) {
				time[i] = "0" + time[i];
			}
		}
		return date.join("/") + " " + time.join(":") + " " + suffix;
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
					title="Add a message and select the type of post"
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					<TextField
						name="msg"
						hintText="Type message here"
						fullWidth={true}
						value={this.state.msg}
						onChange={this.handleChange}
					/>
					<br/>
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

				</Dialog>
			</div>
		);
	}
}

function mapStateToProps({values, user}) {
	return { values: values, user: user};
}

export default connect(mapStateToProps, {addPost})(AddPostDialog);
