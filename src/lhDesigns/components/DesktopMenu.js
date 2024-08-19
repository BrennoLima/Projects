import React from 'react';
import { Box, Tab, Grid, Tabs } from '@mui/material';

import { SocialMedias } from '../components/SocialMedias';
import { useNavigate } from 'react-router-dom';

export const DesktopMenu = ({ redirect, value, setValue }) => {
	const navigate = useNavigate();
	const handleRedirect = (value) => {
		if (redirect) {
			switch (value) {
				case 0:
					navigate('/luhoca-designs#illustration');
					break;
				case 1:
					navigate('/luhoca-designs#eventPlaning');
					break;
				case 2:
					navigate('/luhoca-designs#graphicDesign');
					break;
				case 3:
					navigate('/luhoca-designs#aboutMe');
					break;
				case 4:
					navigate('/luhoca-designs#services');
					break;
				case 5:
					navigate('/luhoca-designs#contact');
					break;
				default:
					break;
			}
		}
	};
	return (
		<Grid
			item
			md={2}
			display={{ xs: 'none', md: 'block' }}
			sx={{
				height: 1,
				background: (theme) => theme.palette.background.paper,
				borderRight: 1,
				borderColor: (theme) => theme.palette.primary.light,
				py: '5vh',
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
				<img
					src='assets/Images/LHDesigns/Illustrations/LH-Logo.png'
					alt='LH-logo'
					style={{ width: '100%' }}
				/>
			</Box>
			<Box sx={{ flex: 1, py: '5vh' }}>
				<Tabs
					variant='fullWidth'
					orientation='vertical'
					value={value}
					onChange={(_, newValue) => {
						setValue(newValue);
						handleRedirect(newValue);
					}}
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
					<Tab iconPosition='start' label='Illustration' />
					<Tab iconPosition='start' label='Event Planning' />
					<Tab iconPosition='start' label='Graphic Design' />
					<Tab iconPosition='start' label='About Me' />
					<Tab iconPosition='start' label='Services' />
					<Tab iconPosition='start' label='Contact' />
				</Tabs>
			</Box>
			<SocialMedias />
		</Grid>
	);
};
