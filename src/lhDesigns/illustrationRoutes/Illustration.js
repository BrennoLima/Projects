import React, { useState } from 'react';
import { Dialog, Card, Grid, Typography } from '@mui/material';

export const Illustration = () => {
	const [openImage, setOpenImage] = useState(null);
	const illustrationItems = [
		{
			text: 'Jaguar with Socks',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration1.jpg',
		},
		{
			text: 'Fishy Deal',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration2.jpg',
		},
		{
			text: 'Monster House',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration3.jpg',
		},
		{
			text: 'Little Krampus',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration4.jpg',
		},
		{
			text: 'Human Noise Polution',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration5.jpg',
		},
		{
			text: 'The Alchemist',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration6.jpg',
		},
	];

	const ImageCard = ({ text, image }) => (
		<Card
			onClick={() => setOpenImage(image)}
			sx={{
				cursor: 'zoom-in',
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
				maxHeight: '50vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<img
				src={image}
				alt={text}
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
			/>
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
		<Grid container direction='row' alignItems='stretch'>
			{illustrationItems.map((item, index) => (
				<Grid item xs={12} md={4} key={index}>
					<ImageCard text={item.text} image={item.image} link={item.link} />
				</Grid>
			))}
			<Dialog
				open={openImage !== null}
				onClose={() => setOpenImage(null)}
				maxWidth='md'
				sx={{
					'& .MuiBackdrop-root': { backgroundColor: 'rgba(0,0,0,0.75)' },
				}}
			>
				<img src={openImage} alt='' style={{ width: 'auto', height: '90vh' }} />
			</Dialog>
		</Grid>
	);
};
