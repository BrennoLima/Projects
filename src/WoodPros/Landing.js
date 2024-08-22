import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { lightTheme } from './themes/light';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export const PanelCraftInteriors = () => {
	const theme = createTheme(lightTheme);

	return (
		<ThemeProvider theme={theme}>
			<Box
				id='wood-pros'
				sx={{
					minHeight: '100vh',
					width: '100%',
					zIndex: 1,
					background: (theme) => theme.palette.background.paper,
				}}
			>
				<Navbar />
				<Hero />
				<Features />
				<Testimonials />
				<Footer />
			</Box>
		</ThemeProvider>
	);
};
