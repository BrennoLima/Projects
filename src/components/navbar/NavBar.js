import React from 'react';
// Components
import { LogoWriting } from '../SVGs/LogoWriting';
import { Logo } from '../SVGs/Logo';
import { Lock } from '../SVGs/Lock';

// Material UI
import Hidden from '@mui/material/Hidden';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Phone } from '../SVGs/Phone';

export const NavBar = () => {
	const classes = {
		navContainer: {
			height: '60px',
			background: '#293343',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		checkoutBtn: {
			color: 'white',
			textTransform: 'none',
			fontWeight: 500,
			display: 'flex',
			alignItems: 'center',
		},
	};
	return (
		<div style={classes.navContainer}>
			<Container style={classes.navContainer}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<Hidden mdDown>
						<Grid item sx={{ marginRight: '80px' }}>
							<LogoWriting />
						</Grid>
					</Hidden>
					<Hidden mdUp>
						<Grid item>
							<Logo />
						</Grid>
					</Hidden>

					<Grid item>
						<Button
							sx={classes.checkoutBtn}
							startIcon={
								<span
									key='lock'
									className='flex items-center justify-center'
									style={{ width: 20, height: 20 }}
								>
									<Lock width={20} />
								</span>
							}
						>
							Secure Checkout
						</Button>
					</Grid>
					<Hidden mdDown>
						<Grid item sx={{ marginLeft: 'auto' }}>
							<Button
								sx={classes.checkoutBtn}
								startIcon={
									<span key='phone'>
										<Phone />
									</span>
								}
							>
								1 234 567-8910
							</Button>
						</Grid>
					</Hidden>
				</Grid>
			</Container>
		</div>
	);
};
