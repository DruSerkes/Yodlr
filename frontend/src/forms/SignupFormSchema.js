import * as Yup from 'yup';

const SignupFormSchema = Yup.object({
	email     : Yup.string().email('Please enter a valid email').required('Email required'),
	firstName : Yup.string().required('First name required'),
	lastName  : Yup.string().required('Last name required')
});

export default SignupFormSchema;
