import React from 'react';
// Components
import { Logo } from '../../components/SVGs/old-bank-cafe/Logo';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
// hooks
import useWindowDimensions from '../../components/hooks/useWindowDimension';

export const OldBankNavBar = () => {
	const { width } = useWindowDimensions();
	const classes = {
		container: {
			height: '50px',
			width: '100%',
			zIndex: 1000,
			padding: width > 768 ? '0 1rem' : null,
			position: 'fixed',
			top: 0,
			display: 'flex',
			alignItems: 'center',
		},
		navBtn: {
			cursor: 'pointer',
			textDecoration: 'none',
			fontWeight: 600,
			padding: '4px 16px',
			color: 'white',
			border: width > 768 ? '1px solid white' : null,
			backdropFilter: 'blur(20px)',
			borderRadius: '0.2rem',
			margin: width > 768 ? '0 0.5rem' : 0,
			'&:hover': {
				background: '#6d685426',
				boxShadow: '1px 2px 10px rgba(0,0,0,0.1)',
			},
		},
	};
	return (
		<div style={classes.container} id='old-bank-navbar'>
			<Container>
				<Grid
					container
					direction='row'
					alignItems='stretch'
					justifyContent='center'
				>
					<Grid
						item
						className='flex items-center justify-center'
						sx={{ marginRight: 'auto' }}
					>
						<Link
							href={'/old-bank'}
							style={{
								cursor: 'pointer',
								textDecoration: 'none',
								width: '40px',
								height: '40px',
							}}
						>
							<Logo />
						</Link>
					</Grid>
					<Grid item className='flex items-center justify-center'>
						<Link className='navBtn' sx={classes.navBtn} href={'/'}>
							Menu
						</Link>
					</Grid>
					<Grid item className='flex items-center justify-center'>
						<Link className='navBtn' sx={classes.navBtn} href={'/'}>
							About
						</Link>
					</Grid>
					<Grid item className='flex items-center justify-center'>
						<Link className='navBtn' sx={classes.navBtn} href={'/'}>
							Contact us
						</Link>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
