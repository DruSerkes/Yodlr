import React, { useContext, useState, useEffect, useCallback } from 'react';
import UserContext from '../Context';
import { Typography, Grid, List, makeStyles } from '@material-ui/core';
import AdminListItem from './AdminListItem';
import { removeUserFromDb } from '../helpers';
import { DELETE_USER } from '../reducer/actionTypes';

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
			<Grid item className={classes.gridItem} xs={12} md={8} lg={10}>
				<Typography variant="h1" className={classes.title}>
					Admin
				</Typography>
				<div className={classes.demo}>
					<List className={classes.list}>
						<Typography variant="h2">Users</Typography>
						{Object.keys(state.users).length ? (
							Object.values(state.users).map((u) => {
								return (
									<AdminListItem
										id={u.id}
										email={u.email}
										firstName={u.firstName}
										lastName={u.lastName}
										state={u.state}
										removeUser={removeUser}
										classes={classes}
										key={u.id}
									/>
								);
							})
						) : (
							<Typography variant="body1">Loading &hellip;</Typography>
						)}
					</List>
				</div>
			</Grid>
		</Grid>
	);

	// return (
	// 	<div>
	// 		{state.users ? (
	// 			Object.values(state.users).map((u) => (
	// 				<h4 key={u.id}>
	// 					{u.email} {u.firstName} {u.lastName}
	// 				</h4>
	// 			))
	// 		) : (
	// 			<h3>Loading &hellip; </h3>
	// 		)}
	// 	</div>
	// );
};

export default Admin;
