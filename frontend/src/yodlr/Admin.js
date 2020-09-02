import React, { useContext, useState, useEffect, useCallback } from 'react';
import UserContext from '../Context';
import { Grid, makeStyles } from '@material-ui/core';
import { removeUserFromDb, updateUserDb } from '../helpers';
import { DELETE_USER, UPDATE_USER } from '../reducer/actionTypes';
import AdminList from './AdminList';

const useStyles = makeStyles((theme) => ({
	gridItem         : {
		maxWidth : 752
	},
	list             : {
		maxWidth : 752,
		minWidth : 280
	},
	listItem         : {
		minWidth : 500
	},
	userStateActive  : {
		color : 'green'
	},
	userStatePending : {
		color : 'orange'
	},
	demo             : {
		backgroundColor : theme.palette.background.paper
	},
	title            : {
		margin : theme.spacing(4, 0, 2)
	}
}));

const Admin = () => {
	const classes = useStyles();
	const { state, dispatch } = useContext(UserContext);
	const [ removingUser, setRemovingUser ] = useState(null);
	const [ activatingUser, setActivatingUser ] = useState(null);
	const [ users, setUsers ] = useState(state.users);
	const removeUser = (id) => {
		setRemovingUser(id);
	};
	const activateUser = (user) => {
		setActivatingUser(user);
	};
	const removeUserFromState = useCallback(
		(id) => {
			const action = { type: DELETE_USER, id: id };
			dispatch(action);
		},
		[ dispatch ]
	);
	const updateUserInState = useCallback(
		(user) => {
			const action = { type: UPDATE_USER, user };
			dispatch(action);
		},
		[ dispatch ]
	);
	// Update UI on state change
	useEffect(
		() => {
			setUsers(state.users);
		},
		[ state ]
	);
	// Async operation for activating a user
	useEffect(
		() => {
			const activate = async () => {
				if (activatingUser) {
					const user = activatingUser;
					user.state = 'active';
					const result = await updateUserDb(user);
					if (result) {
						updateUserInState(result);
					} else {
						console.log(result);
					}
				}
			};
			activate();
			return () => {
				setActivatingUser(null);
			};
		},
		[ activatingUser, updateUserInState ]
	);

	// Async operation for removing a user
	useEffect(
		() => {
			const removeUser = async () => {
				if (removingUser) {
					const result = await removeUserFromDb(removingUser);
					if (result.status === 204) {
						removeUserFromState(removingUser);
					} else {
						console.log(result);
					}
				}
			};
			removeUser();
			return () => {
				setRemovingUser(null);
			};
		},
		[ removingUser, removeUserFromState ]
	);

	return (
		<Grid container direction="column" alignItems="center" spacing={2}>
			<AdminList users={users} removeUser={removeUser} activateUser={activateUser} classes={classes} />
		</Grid>
	);
};

export default Admin;
