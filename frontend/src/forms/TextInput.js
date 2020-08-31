import { useField } from 'formik';
import React from 'react';
import { TextField } from 'formik-material-ui';

const TextInput = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input> and also replace ErrorMessage entirely.
	const [ field, meta ] = useField(props);
	return (
		<div>
			<TextField className="standard-basic" label={label} {...field} {...props} />

			{/* <label htmlFor={props.id || props.name}>{label}</label> */}
			{/* <input className="text-input" {...field} {...props} /> */}
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</div>
	);
};

export default TextInput;
