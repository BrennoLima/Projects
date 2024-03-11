import React, { useEffect, useState } from 'react';
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Divider } from '@mui/material';
import { Navbar } from './components/Navbar/Navbar';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { ArtShowcase } from './components/ArtShowcase';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SocialMedias } from './components/SocialMedias';

export const RafaArts = () => {
	const [mode, setMode] = useState('dark');
	const theme = React.useMemo(
		() => createTheme(mode === 'light' ? lightTheme : darkTheme),
		[mode]
	);

	const toggleMode = () => {
		if (mode === 'dark') {
			localStorage.setItem('theme-mode', 'light');
			return setMode('light');
		}
		localStorage.setItem('theme-mode', 'dark');
		return setMode('dark');
	};

	useEffect(() => {
		if (localStorage.getItem('theme-mode')) {
			setMode(localStorage.getItem('theme-mode'));
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box
				id='rafa-arts'
				sx={{
					width: '100%',
					zIndex: 1,
					background: (theme) => theme.palette.background.paper,
				}}
			>
				<Box
					sx={{
						left: 0,
						top: '50%',
						transform: 'translateY(-50%)',
						position: 'fixed',
						zIndex: 10,
						px: 0.5,
						py: 1,
						background: (theme) =>
							alpha(theme.palette.primary.contrastText, 0.25),
						borderRadius: '0.5rem',
						backdropFilter: 'blur(5px)',
					}}
				>
					<SocialMedias direction='column' />
				</Box>
				<Navbar mode={mode} toggleMode={toggleMode} />
				<ArtShowcase />
				<ActionButtons />
				<Portfolio />
				<Divider sx={{ mt: [3, 6] }} />
				<About />
				<Divider sx={{ mb: [3, 6] }} />
				<Footer />
			</Box>
		</ThemeProvider>
	);
};
