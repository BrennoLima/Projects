import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Grid, Tabs, IconButton } from '@mui/material';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';
import LHLogo from './logo.png';
import { GraphicDesign } from './components/GraphicDesign';

export const LHDesigns = () => {
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

	const [value, setValue] = useState(1);

	return (
		<ThemeProvider theme={theme}>
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
				<IconButton
					onClick={toggleMode}
					sx={{
						zIndex: 100,
						position: 'fixed',
						top: 24,
						right: 24,
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
				<Grid
					item
					xs={12}
					md={3}
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
						}}
					>
						<img src={LHLogo} alt='LH-logo' style={{ width: '75%' }} />
					</Box>
					<Box sx={{ flex: 1, mt: '20%' }}>
						<Tabs
							variant='fullWidth'
							orientation='vertical'
							value={value}
							onChange={(_, newValue) => setValue(newValue)}
							aria-label='Menu'
							sx={{
								'& .MuiTab-root': {
									justifyContent: 'flex-start',
									fontSize: '16px',
									textTransform: 'none',
									minHeight: '65px',
								},
								'& .MuiTab-iconWrapper': {
									fontSize: '24px',
									width: '50px',
									marginRight: '24px !important',
								},
							}}
						>
							<Tab
								icon={<i className='fas fa-user' />}
								iconPosition='start'
								label='About Me'
							/>
							<Tab
								icon={<i className='fas fa-paint-brush' />}
								iconPosition='start'
								label='Graphic Design'
							/>
							<Tab
								icon={<i className='fas fa-pen' />}
								iconPosition='start'
								label='Illustration'
							/>
							<Tab
								icon={<i className='fas fa-hands-helping' />}
								iconPosition='start'
								label='Services'
							/>
							<Tab
								icon={<i className='fas fa-envelope' />}
								iconPosition='start'
								label='Contact'
							/>
						</Tabs>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={9}
					sx={{
						height: 1,
						backgroundColor: '#fffef7',
					}}
				>
					{value === 1 && <GraphicDesign />}
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
