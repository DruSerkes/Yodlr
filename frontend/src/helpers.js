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
