import React, { useState, useReducer } from 'react';
import './App.css';
import DrawerNav from './yodlr/DrawerNav';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './yodlr/Main';
import UserContext from './Context';
import userReducer from './reducer/userReducer';

const initialState = { users: [] };

function App() {
	const classes = useStyles();
	const [ state, dispatch ] = useReducer(userReducer, initialState);
	const [ open, setOpen ] = useState(false);

	return (
		<UserContext.Provider value={{ state, dispatch, open, setOpen }}>
			<div className="App">
				<div className={classes.root}>
					<CssBaseline />
					<DrawerNav />
					<Main />
				</div>
			</div>
		</UserContext.Provider>
	);
}
// TODO add add'l functionality for admin (see reqs)
// TODO refactor Home component

export default App;
