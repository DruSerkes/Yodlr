import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const AdminListItem = ({ id, firstName, lastName, email, state, removeUser, classes, activateUser }) => {
	const fullName = `${firstName} ${lastName}`;
	const handleRemove = () => {
		removeUser(id);
	};
	const handleActivate = () => {
		const user = { id, firstName, lastName, email, state };
		activateUser(user);
	};
	return (
		<ListItem className={classes.listItem} key={id}>
			<ListItemAvatar>
				<Avatar>{firstName[0]}</Avatar>
			</ListItemAvatar>
			<ListItemText primary={email} secondary={fullName} />
			{state === 'active' ? (
				<ListItemText className={classes.userStateActive}>{state}</ListItemText>
			) : (
				<ListItemText className={classes.userStatePending}>{state}</ListItemText>
			)}
			<ListItemSecondaryAction>
				<IconButton edge="end" aria-label="activate" onClick={handleActivate}>
					<VpnKeyIcon />
				</IconButton>
				<IconButton edge="end" aria-label="delete" onClick={handleRemove}>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default AdminListItem;
