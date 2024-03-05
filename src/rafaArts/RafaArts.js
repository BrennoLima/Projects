import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, IconButton, Fade, Typography } from '@mui/material';
import { Navbar } from './components/Navbar';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { ArtShowcase } from './components/ArtShowcase';
import { ActionButtons } from './components/ActionButtons';

export const RafaArts = () => {
	const [mode, setMode] = useState('dark');
	const theme = React.useMemo(
		() => createTheme(mode === 'light' ? lightTheme : darkTheme),
		[mode]
	);

	const toggleMode = () => {
		if (mode === 'dark') return setMode('light');
		return setMode('dark');
	};

	return (
		<ThemeProvider theme={theme}>
			<Fade in timeout={1000}>
				<Box
					sx={{
						width: '100%',
						minHeight: '100vh',
						zIndex: 1,
						background: (theme) => theme.palette.background.paper,
					}}
				>
					<Container sx={{ position: 'relative' }}>
						<Navbar />
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
					<ArtShowcase />
					<ActionButtons />
					<div style={{ height: '100vh' }}></div>
					<div id='about'>
						<Typography color='primary'>About here</Typography>
					</div>
					<div id='footer' style={{ height: '100vh' }}>
						<Typography color='primary'>start</Typography>
					</div>
				</Box>
			</Fade>
		</ThemeProvider>
	);
};
