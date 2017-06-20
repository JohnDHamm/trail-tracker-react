import React from 'react';
import TrailAddPostButton from './trail_add_post_button';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
// import RaisedButton from 'material-ui/RaisedButton';
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
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	handleOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
		console.log("state", this.state);
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
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
			<FlatButton
				label="Ok"
				primary={true}
				// keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>
		];

		return (
			<div>
				<FlatButton
					label="Add a new post"
					style={{color: '#666', flatButton: {textTransform: 'lowercase'}}}
					icon={<FontIcon className="material-icons" color="#666" style={{fontSize: 35, marginLeft: 0}}>add_circle</FontIcon>}
					onTouchTap={this.handleOpen}
				/>
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
