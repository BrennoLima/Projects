import React, { useEffect } from 'react';
import { Box, Container, IconButton } from '@mui/material';
import { Logo } from './Logo';
// Gsap
import gsap from 'gsap';

export const Navbar = ({ mode, toggleMode }) => {
	useEffect(() => {
		gsap.fromTo(
			'#rafa-logo',
			{ opacity: 0 },
			{ opacity: '100%', duration: 2, ease: 'power3.in' }
		);
		gsap.fromTo(
			'#mode-switcher',
			{ opacity: 0 },
			{ opacity: '100%', duration: 2, ease: 'power3.in' }
		);
	}, []);

	return (
		<Container sx={{ position: 'relative' }}>
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
				<Box
					sx={{
						width: ['5rem', '7rem'],
						height: ['5rem', '7rem'],
					}}
					id='rafa-logo'
				>
					<Logo />
				</Box>
			</Box>
			<IconButton
				onClick={toggleMode}
				sx={{
					zIndex: 100,
					position: 'fixed',
					top: 16,
					right: 16,
					transition: '0.2s color ease-in',
					'&:hover': {
						color: (theme) => theme.palette.text.primary,
					},
				}}
				id='mode-switcher'
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
