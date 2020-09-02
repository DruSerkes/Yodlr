import React from 'react';
import { Typography, Grid, List, ListItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	h1    : {
		margin : theme.spacing(4)
	},
	body1 : {
		margin : theme.spacing(4)
	}
}));

const Home = () => {
	const classes = useStyles();
	return (
		<div className="Home">
			<Typography variant="h1" className={classes.h1}>
				Yodlr Design Challenge
			</Typography>
			<Typography variant="body1" className={classes.body1}>
				Welcome To <b>Yodlr</b> - a <em>very</em> simple design challenge made just for practice using...
			</Typography>
			<Grid container justify="center">
				<List>
					<ListItem>React</ListItem>
					<ListItem>React Router</ListItem>
					<ListItem>React Context with the useReducer hook to replicate Redux state</ListItem>
					<ListItem>Consuming a RESTful API</ListItem>
					<ListItem>Formik</ListItem>
					<ListItem>Material UI</ListItem>
					<ListItem>Formik</ListItem>
					<ListItem>Formik-Material-UI</ListItem>
				</List>
			</Grid>
		</div>
	);
};

export default Home;
