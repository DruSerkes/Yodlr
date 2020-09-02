import React from 'react';
import { Grid, Typography, List } from '@material-ui/core';
import AdminListItem from './AdminListItem';

const AdminList = ({ users, classes, removeUser, activateUser }) => {
	const userList = Object.values(users);
	if (!userList.length) {
		return <Typography variant="body1">Loading &hellip;</Typography>;
	}
	return (
		<Grid item className={classes.gridItem} xs={12} md={8} lg={10}>
			<Typography variant="h1" className={classes.title}>
				Admin
			</Typography>
			<div className={classes.demo}>
				<List className={classes.list}>
					<Typography variant="h2">Users</Typography>
					{userList.map((u) => {
						return (
							<AdminListItem
								id={u.id}
								email={u.email}
								firstName={u.firstName}
								lastName={u.lastName}
								state={u.state}
								removeUser={removeUser}
								activateUser={activateUser}
								classes={classes}
								key={u.id}
							/>
						);
					})}
				</List>
			</div>
		</Grid>
	);
};

export default AdminList;
