import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const AdminListItem = ({ id, firstName, lastName, email, state, removeUser, classes }) => {
	const fullName = `${firstName} ${lastName}`;
	const handleRemove = () => {
		removeUser(id);
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
				<IconButton edge="end" aria-label="activate">
					<EditIcon />
				</IconButton>
				<IconButton edge="end" aria-label="delete" onClick={handleRemove}>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default AdminListItem;
