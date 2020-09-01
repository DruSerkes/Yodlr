import React, { useContext } from 'react';
import UserContext from '../Context';
import { Typography } from '@material-ui/core';

// const BASE_URL = `http://localhost:3001/users`;

const Admin = () => {
	const { state } = useContext(UserContext);
	console.log('users == ', state);

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography variant="h1" className={classes.title}>
						Admin
					</Typography>
					<div className={classes.demo}>
						<List>
							<Typography variant="h2">Users</Typography>
							{Object.keys(state.users).length ? (
								Object.values(state.users).map((u) => {
									let fullName = `${u.firstName} ${u.lastName}`;
									return (
										<ListItem>
											<ListItemAvatar>
												<Avatar>
													<FolderIcon />
												</Avatar>
											</ListItemAvatar>
											<ListItemText primary={u.email} secondary={fullName} />
											<ListItemSecondaryAction>
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
		</div>
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
