import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
	Box,
	Container,
	Divider,
	IconButton,
	Fade,
	Typography,
} from '@mui/material';
import { Navbar } from './components/Navbar/Navbar';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';
import { ArtShowcase } from './components/ArtShowcase';
import { ActionButtons } from './components/ActionButtons/ActionButtons';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About';

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
					id='rafa-arts'
					sx={{
						width: '100%',
						minHeight: '100vh',
						zIndex: 1,
						background: (theme) => theme.palette.background.paper,
					}}
				>
					<Navbar mode={mode} toggleMode={toggleMode} />
					<ArtShowcase />
					<ActionButtons />
					<Portfolio />
					<Divider sx={{ mt: 6 }} />
					<About />
					<div id='footer' style={{ height: '100vh' }}>
						<Typography color='primary'>start</Typography>
					</div>
				</Box>
			</Fade>
		</ThemeProvider>
	);
};
