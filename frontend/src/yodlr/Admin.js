import React, { useContext, useEffect } from 'react';
import UserContext from '../Context';

const BASE_URL = `http://localhost:3001/users`;

const Admin = () => {
	const { state, dispatch } = useContext(UserContext);
	console.log('users == ', state);

	return (
		<div>
			{state.users ? (
				Object.values(state.users).map((u) => (
					<h4>
						{u.email} {u.firstName} {u.lastName}
					</h4>
				))
			) : (
				<h3>Loading &hellip; </h3>
			)}
		</div>
	);
};

export default Admin;
