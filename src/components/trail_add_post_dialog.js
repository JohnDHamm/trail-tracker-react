import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
// import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class AddPostDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			msg: '',
			postType: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
		console.log("state", this.state);
	};

	handleChange(event) {
		console.log("event", event);
		const target = event.target;
		// const value = target.type === 'checkbox' ? target.checked : target.value;
		console.log("target", target);
		console.log("target.value", target.value);
		// const value = target.value;
		// console.log("value", value);
		const name = target.name;
		console.log("name", name);

		this.setState({
			[name]: target.value
			// value
		});
	}

	render() {
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Ok"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>
		];

		return (
			<div>
				<RaisedButton label="Add Post" onTouchTap={this.handleOpen} />
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
						value={this.state.msg}
						onChange={this.handleChange}
					/>
					<select
						name="postType"
						// floatingLabelText="Post type"
						value={this.state.postType}
						onChange={this.handleChange}
					>
						<option value="meetup" >Meetup - get together and ride</option>
						<option value="ride-report" >Ride Report - conditions on the trail</option>
						<option value="open-ticket" >Open ticket - report an issue that needs repair</option>
					</select>
				</Dialog>
			</div>
		);
	}
}

