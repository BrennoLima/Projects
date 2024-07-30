import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Grid } from '@mui/material';

import { lightTheme } from './themes/light';
import { GraphicDesign } from './graphicDesignRoutes/GraphicDesign';
import { Illustration } from './illustrationRoutes/Illustration';
import { DesktopMenu } from './components/DesktopMenu';
import { MobileMenu } from './components/MobileMenu';

export const LHDesigns = () => {
	const theme = createTheme(lightTheme);
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (window.location.hash) {
			switch (window.location.hash) {
				case '#illustration':
					setValue(0);
					break;
				case '#eventPlaning':
					setValue(1);
					break;
				case '#graphicDesign':
					setValue(2);
					break;
				case '#aboutMe':
					setValue(3);
					break;
				case '#services':
					setValue(4);
					break;
				case '#contact':
					setValue(5);
					break;
				default:
					break;
			}
			window.history.pushState(null, null, ' ');
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ background: '#faf2ff' }}>
				<Container maxWidth='xl' sx={{ px: 0 }}>
					<Grid
						container
						direction='row'
						sx={{
							width: 1,
							height: ['unset', '100vh'],
							zIndex: 1,
							background: (theme) => theme.palette.background.default,
						}}
					>
						{/** Desktop Menu */}
						<DesktopMenu value={value} setValue={setValue} />
						{/** Mobile Menu */}
						<MobileMenu value={value} setValue={setValue} />
						<Grid
							item
							xs={12}
							md={10}
							sx={{
								height: 1,
								backgroundColor: '#fffef7',
								maxHeight: ['unset', '100vh'],
								overflow: 'auto',
							}}
						>
							{value === 0 && <Illustration />}
							{value === 1 && 'Event Planning'}
							{value === 2 && <GraphicDesign />}
							{value === 3 && 'About Me'}
							{value === 4 && 'Servies'}
							{value === 5 && 'Contact'}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
};
