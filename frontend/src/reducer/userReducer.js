import { ADD_USER, UPDATE_USER, DELETE_USER } from './actionTypes';

const initialState = { users: [] };

function userReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER:
			return { ...state, users: { ...state.users, [action.user.id]: action.user } };
		case DELETE_USER:
			const updatedUsers = { ...state };
			delete updatedUsers[action.id];
			return { ...updatedUsers };
		case UPDATE_USER:
			return {
				...state,
				[action.id]: {
					...state[action.id],
					email     : action.user.email,
					firstName : action.user.firstName,
					lastName  : action.user.lastName,
					state     : action.user.state
				}
			};
		default:
			return state;
	}
}

export default userReducer;
