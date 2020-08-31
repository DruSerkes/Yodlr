import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Routes = () => {
	return (
		<Switch>
			<Route path="/signup">
				<h1>Signup</h1>
			</Route>
			<Route path="/login">
				<h1>Login</h1>
			</Route>
			<Route path="/admin">
				<h1>Admin</h1>
			</Route>
			<Route path="/">
				<h1>Home</h1>
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
