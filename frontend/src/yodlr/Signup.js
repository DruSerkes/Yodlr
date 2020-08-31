import React, { useContext } from 'react';
import SignupForm from '../forms/SignupForm';
import { Typography } from '@material-ui/core';
import { ADD_USER } from '../reducer/actionTypes';
import UserContext from '../Context';

const Signup = () => {
	// TODO Add function/logic for registering a user
	// pass function down as prop to SignupForm
	const { users, dispatch } = useContext(UserContext);
	console.log(users);
	const addUserToState = ({ email, firstName, lastName }) => {
		// Math.random is temporary for testing purposes
		const user = { email, firstName, lastName };
		const action = { type: ADD_USER, user: user, id: Math.random() };
		dispatch(action);
	};

	return (
		<div className="Signup">
			<Typography variant="h1">Register</Typography>
			<SignupForm addUserToState={addUserToState} />
		</div>
	);
};

export default Signup;
