import React, { useState, useEffect } from 'react';
// Components
import { BLogo } from '../components/SVGs/BLogo';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export const NavBar = () => {
	const classes = {
		container: {
			boxShadow: '1px 2px 10px rgba(0,0,0,0.4)',
			height: '50px',
			background: '#ffffff1a',
			padding: '0 1rem',
		},
		navBtn: {
			fontWeight: '600',
			fontSize: '16px',
			color: '#FCFCFC80',
			cursor: 'pointer',
			textDecoration: 'none',
			'&:hover': {
				color: '#FCFCFC',
			},
		},
	};
	const [noNavBar] = useState(['/old-bank', '/payment-page']);
	const [navHidden, setNavHidden] = useState(false);

	useEffect(() => {
		if (noNavBar.includes(window.location.pathname)) setNavHidden(true);
		else setNavHidden(false);
		// eslint-disable-next-line
	}, [window.location.pathname]);

	return navHidden ? null : (
		<div className={classes.container}>
			<Container>
				<Grid
					container
					direction='row'
					alignItems='stretch'
					justifyContent='center'
				>
					<Grid item className='flex items-center justify-center'>
						<Link sx={classes.navBtn} href={'/'}>
							<BLogo />
						</Link>
					</Grid>
					<Grid
						item
						className='flex items-center justify-center'
						sx={{ marginLeft: 'auto' }}
					>
						<Link sx={classes.navBtn} href={'/'}>
							Home
						</Link>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
