export const BASE_URL = `http://localhost:3001/users`;

export const addUserToDb = async (values) => {
	const response = await fetch(BASE_URL, {
		method  : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		body    : {
			user : values
		}
	});
	const data = response.json();
	return data;
};
