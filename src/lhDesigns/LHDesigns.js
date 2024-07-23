import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box, Tab, Grid, Tabs } from '@mui/material';
import { lightTheme } from './themes/light';
import LHLogo from './logo.png';
import { GraphicDesign } from './components/GraphicDesign';

export const LHDesigns = () => {
	const theme = createTheme(lightTheme);
	const [value, setValue] = useState(0);

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ background: '#faf2ff' }}>
				<Container maxWidth='xl'>
					<Grid
						container
						direction='row'
						sx={{
							width: 1,
							height: '100vh',
							zIndex: 1,
							background: (theme) => theme.palette.background.default,
						}}
					>
						<Grid
							item
							xs={12}
							md={2}
							sx={{
								height: 1,
								background: (theme) => theme.palette.background.paper,
								borderRight: 1,
								borderColor: (theme) => theme.palette.primary.light,
							}}
						>
							<Box
								sx={{
									width: 1,
									padding: 4,
									display: 'flex',
									justifyContent: 'center',
									mt: 5,
								}}
							>
								<img src={LHLogo} alt='LH-logo' style={{ width: '100%' }} />
							</Box>
							<Box sx={{ flex: 1, mt: '20%' }}>
								<Tabs
									variant='fullWidth'
									orientation='vertical'
									value={value}
									onChange={(_, newValue) => setValue(newValue)}
									aria-label='Menu'
									TabIndicatorProps={{
										style: {
											display: 'none',
										},
									}}
									sx={{
										'& .MuiTab-root': {
											fontFamily: 'Zain !important',
											justifyContent: 'center',
											fontSize: '20px',
											textTransform: 'none',
											minHeight: '40px',
											'&:hover': {
												color: (theme) => theme.palette.primary.main,
											},
										},
										'& .Mui-selected': {
											fontWeight: 'bold',
										},
										'& .MuiTab-iconWrapper': {
											fontSize: '16px',
											width: '50px',
										},
									}}
								>
									<Tab iconPosition='start' label='Graphic Design' />
									<Tab iconPosition='start' label='Event Planning' />
									<Tab iconPosition='start' label='Illustration' />
									<Tab iconPosition='start' label='About Me' />
									<Tab iconPosition='start' label='Services' />
									<Tab iconPosition='start' label='Contact' />
								</Tabs>
							</Box>
						</Grid>
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
							{value === 0 && <GraphicDesign />}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
};
