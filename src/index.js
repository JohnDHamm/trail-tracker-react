import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<h2 className="title-test">App-tastic!!</h2>
					<RaisedButton label="RaisedButton" />
				</div>
			</MuiThemeProvider>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
