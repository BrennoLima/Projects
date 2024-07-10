import React from 'react';
import { Box, Card, Grid, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const GraphicDesign = () => {
	const navigate = useNavigate();
	const graphicDesignItems = [
		{
			text: 'Fishing Brand & Package Design',
			image: 'assets/Images/LHDesigns/fishing-line-title.png',
			link: '/luhoca-designs/graphic-design/fishing',
		},
		{
			text: 'Craft Wine Brand Design',
			image: 'assets/Images/LHDesigns/whine-vine-title.png',
			link: '/luhoca-designs/graphic-design/whine',
		},
		{
			text: 'Foodtruck Brand & Design',
			image: 'assets/Images/LHDesigns/food-truck-title.png',
		},
		{ text: 'Graphic Comission', image: '' },
		{
			text: 'Wedding Prints & Designs',
			image: 'assets/Images/LHDesigns/wedding-design-title.png',
		},
		{
			text: 'Bakery Brand & Brochure Design',
			image: 'assets/Images/LHDesigns/dukduk-title.png',
		},
	];
	const ImageCard = ({ text, image, link = '/' }) => (
		<Card
			onClick={() => navigate(link)}
			sx={{
				position: 'relative',
				'> p': {
					display: 'none',
				},
				'&:hover': {
					'> p': {
						position: 'absolute',
						display: 'unset',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%,-50%)',
					},
					'> img': {
						transition: 'all 0.2s linear',
						filter: 'brightness(50%)',
					},
				},
				height: 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'pointer',
			}}
		>
			<img src={image} alt={text} style={{ width: '100%', height: 'auto' }} />
			<Typography
				fontSize={20}
				fontWeight='medium'
				sx={{ color: '#FFF', zIndex: 1, textAlign: 'center' }}
			>
				{text}
			</Typography>
		</Card>
	);

	return (
		<Box sx={{ height: 1 }}>
			<Box
				sx={{
					height: '10vh',
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'center',
				}}
			>
				<Typography
					fontWeight='bold'
					variant='h4'
					textAlign='center'
					color='text.primary'
				>
					Graphic Design
				</Typography>
			</Box>
			<Box sx={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
					gap={3}
				>
					{graphicDesignItems.map((item, index) => (
						<Grid
							item
							xs={12}
							md={3}
							sx={{ width: 1, height: '30vh' }}
							key={index}
						>
							<ImageCard text={item.text} image={item.image} link={item.link} />
						</Grid>
					))}
					<Grid
						item
						xs={12}
						container
						direction='row'
						alignItems='center'
						justifyContent='center'
					>
						<Grid item>
							<IconButton sx={{ width: '42px', height: '42px' }}>
								<i className='fas fa-chevron-left' />
							</IconButton>
						</Grid>
						<Grid item>
							<IconButton sx={{ width: '42px', height: '42px' }}>
								<i className='fas fa-chevron-right' />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
