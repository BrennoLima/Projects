import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import { Logo } from './Logo';

export const Navbar = () => {
	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					py: 2,
				}}
			>
				<Box
					sx={{
						width: '10rem',
					}}
					id='panelcraft-interiors'
				>
					<Logo />
				</Box>
				<Stack direction='row' gap={2}>
					<Button>Features</Button>
					<Button>Testimonials</Button>
					<Button>Contact us</Button>
				</Stack>
			</Box>
		</Container>
	);
};
