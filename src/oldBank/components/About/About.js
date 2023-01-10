import React from 'react';
// Components
import { OldBankNavBar } from '../OldBankNavBar';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const About = () => {
	return (
		<Grid
			item
			xs={12}
			style={{
				zIndex: 2,
				background: '#fffbeb',
				minHeight: '100vh',
			}}
			className='py-8 md:py-16'
			id='section-2'
		>
			{/**
			 * Navbar
			 */}
			<OldBankNavBar color={true} />
			{/**
			 * Content
			 */}
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
					className='md:p-4'
				></Grid>
			</Container>
		</Grid>
	);
};
