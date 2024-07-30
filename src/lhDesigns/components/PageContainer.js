import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Grid } from '@mui/material';

import { lightTheme } from '../themes/light';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const PageContainer = ({ children }) => {
	const theme = createTheme(lightTheme);
	const [value, setValue] = useState(2);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ background: '#faf2ff' }}>
				<Container maxWidth='xl'>
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
						<DesktopMenu redirect value={value} setValue={setValue} />
						{/** Mobile Menu */}
						<MobileMenu redirect value={value} setValue={setValue} />
						<Grid
							item
							xs={12}
							md={10}
							sx={{
								height: 1,
								backgroundColor: '#fffef7',
								maxHeight: '100vh',
								overflow: 'auto',
							}}
						>
							{children}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
};
