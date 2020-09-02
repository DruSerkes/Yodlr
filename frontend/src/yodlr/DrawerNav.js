import React, { useContext } from 'react';
import OpenContext from '../Context';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import useStyles from '../useStyles';
import ListItemLink from './ListItemLink';

const DrawerNav = () => {
	const classes = useStyles();
	const theme = useTheme();
	const { open, setOpen } = useContext(OpenContext);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Yodlr
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper : classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>

				<List>
					<List aria-label="nav">
						<ListItemLink to="/" primary="Home" icon={<HomeIcon color="primary" />} />
						<ListItemLink to="/signup" primary="Signup" icon={<VpnKeyIcon />} />
						{/* <ListItemLink to="/login" primary="Login" icon={<InboxIcon />} /> */}
					</List>
					<Divider />
					<List aria-label="admin panel">
						<ListItemLink to="/admin" primary="Admin" icon={<SupervisorAccountIcon />} />
					</List>
				</List>
			</Drawer>
		</div>
	);
};

export default DrawerNav;
