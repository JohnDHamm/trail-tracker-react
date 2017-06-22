import React from 'react';
import { connect } from 'react-redux';

import Snackbar from 'material-ui/Snackbar';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class AddPhotoTempSnackbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {values} = this.props;

    return (
      <div>
        <FlatButton
          onTouchTap={this.handleTouchTap}
          labelStyle={{color: `${values.actionButton.color}`}}
          label="Add photo"
        />
        <Snackbar
          open={this.state.open}
          message="Photo upload option in development."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

function mapStateToProps({values}) {
  return { values };
}

export default connect(mapStateToProps)(AddPhotoTempSnackbar);
