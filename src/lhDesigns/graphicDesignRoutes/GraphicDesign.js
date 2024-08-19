import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
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
			link: '/luhoca-designs/graphic-design/tak-yo',
		},
		{
			text: 'Bakery Brand & Brochure Design',
			image: 'assets/Images/LHDesigns/dukduk-title.png',
			link: '/luhoca-designs/graphic-design/dukduk',
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
						filter: 'brightness(25%)',
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
		<Grid
			container
			direction='row'
			alignItems='center'
			justifyContent='flex-start'
		>
			{graphicDesignItems.map((item, index) => (
				<Grid item xs={12} md={4} key={index}>
					<ImageCard text={item.text} image={item.image} link={item.link} />
				</Grid>
			))}
		</Grid>
	);
};
