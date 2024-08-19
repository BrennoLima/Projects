import React, { useState } from 'react';
import { Dialog, Card, Grid, Typography } from '@mui/material';

export const Illustration = () => {
	const [openImage, setOpenImage] = useState(null);
	const [altText, setAltText] = useState('');
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
		{
			text: 'Fantasy Bull',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration7.jpg',
		},
		{
			text: 'Cerberus and Owl',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration8.jpg',
		},
		{
			text: 'Drowning Pig',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration9.jpg',
		},
		{
			text: `Dragon's Den`,
			image: 'assets/Images/LHDesigns/Illustrations/Illustration10.jpg',
		},
		{
			text: 'Buzzing Bee',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration11.jpg',
		},
		{
			text: 'Tiger',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration12.jpg',
		},
		{
			text: 'Fruit Bat',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration13.jpg',
		},
		{
			text: 'Kitten',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration14.jpg',
		},
		{
			text: 'Sacrificial Lamb',
			image: 'assets/Images/LHDesigns/Illustrations/Illustration15.jpg',
		},
	];

	const ImageCard = ({ text, image }) => (
		<Card
			onClick={() => {
				setOpenImage(image);
				setAltText(text);
			}}
			sx={{
				borderRadius: 0,
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
				<img
					src={openImage}
					alt={altText}
					style={{ width: 'auto', height: '90vh' }}
				/>
			</Dialog>
		</Grid>
	);
};
