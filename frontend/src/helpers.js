export const BASE_URL = `http://localhost:3001/users`;

export const addUserToDb = async (userData) => {
	const user = JSON.stringify(userData);
	const response = await fetch(BASE_URL, {
		method  : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		body    : user
	});
	const data = await response.json();
	return data;
};

export const removeUserFromDb = async (id) => {
	const response = await fetch(`${BASE_URL}/${id}`, {
		method  : 'DELETE',
		headers : {
			'Content-Type' : 'application/json'
		}
	});
	return response;
};

export const updateUserDb = async (user) => {
	const response = await fetch(`${BASE_URL}/${user.id}`, {
		method  : 'PUT',
		headers : {
			'Content-Type' : 'application/json'
		},
		body    : JSON.stringify(user)
	});
	const data = await response.json();
	return data;
};
