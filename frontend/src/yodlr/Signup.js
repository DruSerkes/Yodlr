import React, { useContext, useCallback, useEffect, useState } from 'react';
import SignupForm from '../forms/SignupForm';
import { Typography } from '@material-ui/core';
import { ADD_USER } from '../reducer/actionTypes';
import UserContext from '../Context';
import { addUserToDb } from '../helpers';

const Signup = () => {
	const { dispatch } = useContext(UserContext);
	const [ userData, setUserData ] = useState(null);
	const addUserToState = useCallback(
		(values) => {
			const action = { type: ADD_USER, user: values };
			dispatch(action);
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			const registerUser = async () => {
				if (userData) {
					const user = await addUserToDb(userData);
					addUserToState(user);
				}
			};
			registerUser();
			return () => {
				setUserData(null);
			};
		},
		[ userData, addUserToState ]
	);

	const submitUserData = (userData) => {
		setUserData(userData);
	};

	return (
		<div className="Signup">
			<Typography variant="h1">Register</Typography>
			<SignupForm submitUserData={submitUserData} />
		</div>
	);
};

export default Signup;
