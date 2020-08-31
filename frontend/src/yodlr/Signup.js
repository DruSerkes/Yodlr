import React from 'react';
import SignupForm from '../forms/SignupForm';
import { Typography } from '@material-ui/core';

const Signup = () => {
	// TODO Add function/logic for registering a user
	// pass function down as prop to SignupForm

	return (
		<div className="Signup">
			<Typography variant="h1">Register</Typography>
			<SignupForm />
		</div>
	);
};

export default Signup;
