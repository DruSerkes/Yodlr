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
	const addUserToState = (values) => {
		const action = { type: ADD_USER, user: values };
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
