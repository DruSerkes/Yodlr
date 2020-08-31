import React, { useState, useReducer } from 'react';
import './App.css';
import DrawerNav from './yodlr/DrawerNav';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OpenContext from './Context';
import Main from './yodlr/Main';
import UserContext from './Context';

function App() {
	const classes = useStyles();
	const [ users, dispatch ] = useReducer();

	const [ open, setOpen ] = useState(false);

	return (
		<UserContext.Provider value={{ users, dispatch }}>
			<OpenContext.Provider value={{ open, setOpen }}>
				<div className="App">
					<div className={classes.root}>
						<CssBaseline />
						<DrawerNav />
						<Main />
					</div>
				</div>
			</OpenContext.Provider>
		</UserContext.Provider>
	);
}
// {/* TODO make Homepage component */}
// <h1>Yodlr Design Challenge</h1>
// <p>
// 	{/* TODO make signup page component (with form)  */}
// 	{/* TODO setup formik components (with Yup for validation) */}
// 	<a href="/signup.html">Registration Page</a>
// 	<br />
// 	{/* TODO make admin page component */}
// 	<a href="/admin.html">Admin Page</a>
// </p>

export default App;
