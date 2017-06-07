import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar'
import SecondComponentTest from './components/second_component';

class App extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<h2 className="title-test">App-tastic!!</h2>
				<SecondComponentTest />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
