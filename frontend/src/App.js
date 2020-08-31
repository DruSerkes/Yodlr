import React, { useState } from 'react';
import './App.css';
import DrawerNav from './yodlr/DrawerNav';
// import Routes from './Routes';
// import clsx from 'clsx';
import useStyles from './useStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import OpenContext from './Context';
import Main from './yodlr/Main';

function App() {
	const classes = useStyles();
	const [ open, setOpen ] = useState(false);

	return (
		<OpenContext.Provider value={{ open, setOpen }}>
			<div className="App">
				<div className={classes.root}>
					<CssBaseline />
					<DrawerNav />
					<Main />
				</div>
			</div>
		</OpenContext.Provider>
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
