import React, { useContext } from 'react';
import UserContext from '../Context';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
	Typography,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Avatar,
	makeStyles
} from '@material-ui/core';

// const BASE_URL = `http://localhost:3001/users`;

const useStyles = makeStyles((theme) => ({
	gridItem : {
		maxWidth : 752
	},
	list     : {
		maxWidth : 752,
		minWidth : 280
	},
	listItem : {
		width : 400
	},
	demo     : {
		backgroundColor : theme.palette.background.paper
	},
	title    : {
		margin : theme.spacing(4, 0, 2)
	}
}));

const Admin = () => {
	const { state } = useContext(UserContext);
	const classes = useStyles();
	console.log('users == ', state);

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
								let fullName = `${u.firstName} ${u.lastName}`;
								return (
									<ListItem className={classes.listItem} key={u.id}>
										<ListItemAvatar>
											<Avatar>{u.firstName[0]}</Avatar>
										</ListItemAvatar>
										<ListItemText primary={u.email} secondary={fullName} />
										<ListItemSecondaryAction>
											<IconButton edge="end" aria-label="activate">
												<EditIcon />
											</IconButton>
											<IconButton edge="end" aria-label="delete">
												<DeleteIcon />
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
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
