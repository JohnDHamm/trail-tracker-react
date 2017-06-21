import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, getPosts } from '../actions';

import TrailCloseTicketButton from './trail_close_ticket_button';
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
			msg: '',
			// postType: ''
		};

		this.handleChange = this.handleChange.bind(this);
		// this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	componentDidMount() {
		const currentUser = this.props.user.user;
		this.setState({userName: currentUser.name, userImgUrl: currentUser.iconUrl, userId: currentUser._id});
	}

	handleOpen = () => {
		this.setState({open: true});
		// console.log("event", event);
	};

	handleClose = () => {
		this.clearState();
		console.log("canceled! state:", this.state);
	};

	handlePost = () => {
		const trailId = this.props.currentTrailId.trailId;
		const timeStamp = new Date();
		//need to get original open ticket post values (state.ticketToClose)
		const closingMsg = `original issue: "(open ticket desc)" by (open ticket userName) on (open ticket date) has been closed by ${this.state.userName} - "${this.state.msg}" - Beers for all!`;

		const newPost = {
			description: closingMsg,
			postTypeString: 'closed-ticket',
			userName: this.state.userName,
			userImgUrl: this.state.userImgUrl,
			userId: this.state.userId,
			hasPhoto: false,
			photoUrl: '',
			postDate: timeStamp,
			postTrailId: trailId,
			ticketopen: false
		};
		newPost.postFormatDate = this.formatDate(timeStamp);

		this.props.addPost(newPost, () => {
			this.clearState();
			//delete open ticket post just closed
			this.props.getPosts(trailId);
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

	// handleSelectChange(event, index, value) {
	// 	this.setState({
	// 		postType: value
	// 	});

	// }

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
				</Dialog>
			</div>
		);
	}
}

function mapStateToProps({values, user, currentTrailId}) {
	return { values, user, currentTrailId};
}

export default connect(mapStateToProps, { addPost, getPosts})(TrailCloseTicketDialog);
