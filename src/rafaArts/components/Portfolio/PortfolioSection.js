import React, { useRef } from 'react';
import { Box, Button, Link, Grid, Typography } from '@mui/material';
// Slider
import Slider from 'react-slick';
// Components
import { ImageCard } from './ImageCard';

export const PortfolioSection = ({
	images,
	title,
	text,
	buttonText,
	link,
	sectionId,
}) => {
	const slide1Ref = useRef(null);
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		slidesToScroll: 1,
		cssEase: 'linear',
	};

	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='center'
			id={sectionId}
		>
			<Grid item xs={12} md={8} sx={{ position: 'relative' }}>
				<Slider ref={slide1Ref} {...settings}>
					{images.map((slide, count) => (
						<ImageCard key={count + 'char'} image={slide} />
					))}
				</Slider>
				<Button
					onClick={() => slide1Ref?.current?.slickNext()}
					sx={{
						color: (theme) => theme.palette.text.primary,
						position: 'absolute',
						top: '50%',
						right: 0,
						zIndex: 10,
						height: '100%',
						widht: '30px',
						background: 'rgb(0 0 0 / 40%)',
						borderRadius: '0.5rem',
						backdropFilter: 'blur(5px)',
						transform: 'translateY(-50%)',
					}}
				>
					<i className='fas fa-chevron-right' />
				</Button>
			</Grid>
			<Grid
				item
				xs={12}
				md={4}
				sx={{ p: 5, display: 'flex', flexDirection: 'column' }}
			>
				<Typography
					color='primary'
					variant='h4'
					fontWeight={500}
					sx={{
						mb: 4,
						letterSpacing: '4px',
					}}
				>
					{title}
				</Typography>
				<Typography
					variant='subtitle'
					sx={{
						color: (theme) => theme.palette.primary.light,
					}}
				>
					{text}
				</Typography>
				<Box>
					<Button
						component={Link}
						to={link}
						sx={{ textTransform: 'none', mt: 2, pl: 0 }}
					>
						{buttonText}
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
