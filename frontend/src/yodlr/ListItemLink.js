import React, { useMemo, forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

const ListItemLink = ({ icon, primary, to }) => {
	const renderLink = useMemo(() => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />), [
		to
	]);

	return (
		<li>
			<ListItem button component={renderLink}>
				{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
				<ListItemText primary={primary} />
			</ListItem>
		</li>
	);
};

export default ListItemLink;
