import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './TextInput';
import SignupFormSchema from './SignupFormSchema';
import { Button } from '@material-ui/core';

const SignupForm = () => {
	const initialValues = { email: '', firstName: '', lastName: '' };
	const handleSubmit = (values, { setSubmitting }) => {
		setSubmitting(false);
		// TODO - register this user!
	};

	return (
		<Formik initialValues={initialValues} validationSchema={SignupFormSchema} onSubmit={handleSubmit}>
			<Form>
				<TextInput name="email" placeholder="Email" />
				<TextInput name="firstName" placeholder="First name" />
				<TextInput name="lastName" placeholder="Last name" />
				<Button type="submit" variant="contained" color="primary">
					Register
				</Button>
			</Form>
		</Formik>
	);
};

export default SignupForm;
