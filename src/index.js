import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import Home from './components/home';
import Trails from './components/trails';
import Trail from './components/trail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/trails" component={Trails} />
					<Route path="/trail/:id" component={Trail} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
  </Provider>
	, document.querySelector('#container')
);
