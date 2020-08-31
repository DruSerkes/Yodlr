import React from 'react';
import { Formik, Form, Field } from 'formik';
import SignupFormSchema from './SignupFormSchema';
import { Button } from '@material-ui/core';
import useStyles from '../useStyles';
import { TextField } from 'formik-material-ui';

const SignupForm = () => {
	const classes = useStyles();
	const initialValues = { email: '', firstName: '', lastName: '' };
	const handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
		console.log(values);
		// TODO - register this user!
	};

	return (
		<Formik initialValues={initialValues} validationSchema={SignupFormSchema} onSubmit={handleSubmit}>
			<Form className={classes.form}>
				<Field component={TextField} name="email" type="email" label="Email" />
				<br />
				<Field component={TextField} name="firstName" type="firstName" label="First name" />
				<br />
				<Field component={TextField} name="lastName" type="lastName" label="Last name" />
				<br />
				<Button type="submit" variant="contained" color="primary">
					Register
				</Button>
			</Form>
		</Formik>
	);
};

export default SignupForm;
