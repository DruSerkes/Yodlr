import React, { useContext, useEffect } from 'react';
import UserContext from '../Context';

const BASE_URL = `http://localhost:3001/users`;

const Admin = () => {
	const { users, dispatch } = useContext(UserContext);
	console.log(users);

	return (
		<div>
			{users ? (
				Object.values(users).map((u) => (
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
