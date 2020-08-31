import React, { useContext, useEffect } from 'react';
import UserContext from '../Context';

const BASE_URL = `http://localhost:3001/users`;

const Admin = () => {
	const { users, dispatch } = useContext(UserContext);

	useEffect(
		() => {
			fetch(BASE_URL, { method: 'GET' })
				.then((response) => response.json())
				.then((data) => console.log(data))
				.catch((err) => console.log(err));
		},
		[ users ]
	);

	return (
		<div>
			{users.length ? (
				Array.from(users).map((u) => (
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
