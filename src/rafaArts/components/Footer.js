import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Logo } from './Navbar/Logo';

export const Footer = () => {
	return (
		<Container sx={{ pb: 6 }} id='footer'>
			<Stack sx={{ alignItems: 'center' }}>
				<Box sx={{ width: '48px', height: '48px' }}>
					<Logo />
				</Box>
				<Typography variant='caption' color='text.secondary' sx={{ mt: 2 }}>
					© 2024 Araujo3DStudio
				</Typography>
			</Stack>
		</Container>
	);
};
