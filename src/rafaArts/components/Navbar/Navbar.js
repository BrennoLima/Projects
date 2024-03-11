import React from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { Logo } from './Logo';

export const Navbar = ({ mode, toggleMode }) => {
	return (
		<Container sx={{ position: 'relative' }}>
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
				<Box
					sx={{
						width: ['5rem', '7rem'],
						height: ['5rem', '7rem'],
					}}
				>
					<Logo />
				</Box>
			</Box>
			<IconButton
				onClick={toggleMode}
				sx={{
					zIndex: 10,
					position: 'fixed',
					top: 16,
					right: 16,
					transition: '0.2s color ease-in',
					'&:hover': {
						color: (theme) => theme.palette.text.primary,
					},
				}}
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
