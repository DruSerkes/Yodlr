import React, { useContext, useState, useEffect, useCallback } from 'react';
import UserContext from '../Context';
import { Typography, Grid, List, makeStyles } from '@material-ui/core';
import AdminListItem from './AdminListItem';
import { removeUserFromDb } from '../helpers';
import { DELETE_USER } from '../reducer/actionTypes';
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
	const [ users, setUsers ] = useState(state.users);
	const removeUser = (id) => {
		setRemovingUser(id);
	};

	const removeUserFromState = useCallback(
		(id) => {
			const action = { type: DELETE_USER, id: id };
			dispatch(action);
		},
		[ dispatch ]
	);

	// useEffect(() => {
	// 	setUsers(state.users)
	// }, [ state ]);

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
		<Grid container direction="column" justify="center" alignItems="center" spacing={2}>
			<AdminList users={users} removeUser={removeUser} classes={classes} />
		</Grid>
	);
};

export default Admin;
