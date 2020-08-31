import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './yodlr/Home';

/**
 * Client-side Routing for Yodlr
 */
const Routes = () => {
	return (
		<Switch>
			<Route path="/signup">
				<h1>Signup</h1>
				{/* <Signup /> */}
			</Route>
			<Route path="/login">
				<h1>Login</h1>
				{/* <Login /> */}
			</Route>
			<Route path="/admin">
				<h1>Admin</h1>
				{/* <Admin /> */}
			</Route>
			<Route path="/">
				{/* <h1>Home</h1> */}
				<Home />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
