import React from 'react';
import { Box, Container } from '@mui/material';
import { Logo } from './Logo';

export const Navbar = () => {
	return (
		<Container>
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
				<Box sx={{ width: '100px', height: '100px' }}>
					<Logo />
				</Box>
			</Box>
		</Container>
	);
};
