import React, { useContext } from 'react';
import clsx from 'clsx';
import useStyles from '../useStyles';
import Routes from '../Routes';
import OpenContext from '../Context';

const Main = () => {
	const { open } = useContext(OpenContext);
	const classes = useStyles();
	return (
		<main
			className={clsx(classes.content, {
				[classes.contentShift]: open
			})}
		>
			<div className={classes.drawerHeader} />
			<Routes />
		</main>
	);
};

export default Main;
