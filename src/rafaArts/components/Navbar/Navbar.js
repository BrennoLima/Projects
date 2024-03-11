import React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { Logo } from './Logo';

export const Navbar = ({ mode, toggleMode }) => {
	return (
		<Container sx={{ position: 'relative' }}>
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
				<Box sx={{ width: '100px', height: '100px' }}>
					<Logo />
				</Box>
			</Box>
			<IconButton
				onClick={toggleMode}
				sx={{ position: 'absolute', top: 16, right: 16 }}
			>
				{mode === 'dark' ? (
					<i className='fas fa-sun' key='sun' />
				) : (
					<i className='fas fa-moon' key='moon' />
				)}
			</IconButton>
		</Container>
	);
};