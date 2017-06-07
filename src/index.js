import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Trails from './components/trails';
import Trail from './components/trail';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/trails" component={Trails} />
				<Route path="/trail/:id" component={Trail} />
				<Route path="/" component={Home} />
			</Switch>
		</div>
	</BrowserRouter>
	, document.querySelector('.container')
);
