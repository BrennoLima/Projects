import React, { useRef } from 'react';
import { Box, Button, Link, Grid, Typography } from '@mui/material';
// Slider
import Slider from 'react-slick';
// Components
import { ImageCard } from './ImageCard';
import useWindowDimension from '../../../components/hooks/useWindowDimension';

export const PortfolioSection = ({
	images,
	title,
	text,
	buttonText,
	link,
	sectionId,
}) => {
	const { width } = useWindowDimension();
	const slide1Ref = useRef(null);
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: width > 900 ? 3 : 1,
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
						color: '#FFF',
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
				sx={{ p: [3, 5], display: 'flex', flexDirection: 'column' }}
			>
				<Typography
					color='text.primary'
					variant={width > 900 ? 'h4' : 'h5'}
					fontWeight={600}
					sx={{
						mb: 2,
						letterSpacing: '2px',
					}}
				>
					{title}
				</Typography>
				<Typography variant='subtitle2' color='text.secondary'>
					{text}
				</Typography>
				<Box>
					<Button
						component={Link}
						to={link}
						sx={{
							textTransform: 'none',
							mt: 4,
							color: (theme) => theme.palette.text.primary,
							border: '1px solid transparent',
							transition: '0.2s border ease-in',
							'&:hover': {
								borderColor: (theme) => theme.palette.text.primary,
							},
						}}
					>
						{buttonText}
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
