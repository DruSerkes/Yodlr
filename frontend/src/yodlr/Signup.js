import React, { useContext, useCallback } from 'react';
import SignupForm from '../forms/SignupForm';
import { Typography } from '@material-ui/core';
import { ADD_USER } from '../reducer/actionTypes';
import UserContext from '../Context';
import { addUserToDb } from '../helpers';

const Signup = () => {
	// TODO Add function/logic for registering a user
	// pass function down as prop to SignupForm
	const { dispatch } = useContext(UserContext);
	const addUserToState = useCallback(
		(values) => {
			const action = { type: ADD_USER, user: values };
			dispatch(action);
		},
		[ dispatch ]
	);

	return (
		<div className="Signup">
			<Typography variant="h1">Register</Typography>
			<SignupForm addUserToState={addUserToState} addUserToDb={addUserToDb} />
		</div>
	);
};

export default Signup;
