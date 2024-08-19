import React, { useState } from 'react';
import { IconButton, Tab, Grid, Tabs, Dialog } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { SocialMedias } from '../components/SocialMedias';

export const MobileMenu = ({ redirect, value, setValue }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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
			xs={12}
			sx={{
				p: 2,
				display: ['flex', 'none'],
				alignItems: 'center',
				justifyContent: 'space-between',
				background: '#faf2ff',
			}}
		>
			<img
				src='assets/Images/LHDesigns/Illustrations/LH-Logo.png'
				alt='LH-logo'
				style={{ width: '30%' }}
			/>
			<IconButton onClick={() => setIsMenuOpen(true)}>
				<i className='fas fa-bars' key='menu' />
			</IconButton>
			<Dialog open={isMenuOpen} fullScreen>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
				>
					<Grid
						item
						xs={12}
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							p: 2,
						}}
					>
						<img
							src='assets/Images/LHDesigns/Illustrations/LH-Logo.png'
							alt='LH-logo'
						/>
						<IconButton size='small' onClick={() => setIsMenuOpen(false)}>
							<i className='fas fa-times' key='close' />
						</IconButton>
					</Grid>

					<Grid item xs={12} sx={{ mt: '20%', mb: 5 }}>
						<Tabs
							variant='fullWidth'
							orientation='vertical'
							value={value}
							onChange={(_, newValue) => {
								setValue(newValue);
								handleRedirect(newValue);
								setIsMenuOpen(false);
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
									fontSize: '24px',
									textTransform: 'none',
									minHeight: '45px',
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
					</Grid>
					<Grid item xs={12}>
						<SocialMedias size='medium' />
					</Grid>
				</Grid>
			</Dialog>
		</Grid>
	);
};
