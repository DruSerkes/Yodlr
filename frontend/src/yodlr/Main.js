import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from '../useStyles';
import Routes from '../Routes';
import UserContext from '../Context';
import { ADD_USER } from '../reducer/actionTypes';
const BASE_URL = `http://localhost:3001/users`;

const Main = () => {
	const { state, dispatch, open } = useContext(UserContext);
	const classes = useStyles();

	const addUserToState = (values) => {
		const action = { type: ADD_USER, user: values };
		dispatch(action);
	};
	// On Load - fetch all users and store in context
	useEffect(() => {
		fetch(BASE_URL, { method: 'GET' })
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				data.forEach((user) => {
					addUserToState(user);
				});
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<main
			className={clsx(classes.content, {
				[classes.contentShift]: open
			})}
		>
			<div className={classes.drawerHeader} />
			<Routes />
		</main>
	);
};

export default Main;
