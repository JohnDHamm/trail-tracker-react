import React from 'react';
import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const customContentStyle = {
  width: '90%',
  maxWidth: 'none'
};

// const imgDivStyle = {
//   maxWidth: '100%',
//   height: 'auto',
//   backgroundImage: 'url("/src/img/open_tickets/leaningTree01_chickasaw_tagged.jpg")',
//   backgroundSize: 'contain'
// }

const imgStyle = {
  maxWidth: '100%',
  maxHeight: 540,
  display: 'block',
  margin: 'auto'
}

export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <IconButton
        onTouchTap={this.handleClose}>
        <FontIcon className="material-icons" color="#666">close</FontIcon>
      </IconButton>
    ];

    return (
      <div>
        <RaisedButton label="Photo Modal" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          contentStyle={customContentStyle}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src="/src/img/open_tickets/leaningTree01_chickasaw_tagged.jpg" style={imgStyle} />
        </Dialog>
      </div>
    );
  }
}
          // <img src="/src/img/open_tickets/open_ticket_3.jpg" style={imgStyle} />
