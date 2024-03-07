import React from 'react';
import { Box, Button, Link, Grid, Typography } from '@mui/material';
// Slider
import Slider from 'react-slick';
// Components
import { ImageCard } from './ImageCard';

export const Portfolio = () => {
	// const { width } = useWindowDimensions();
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		slidesToScroll: 1,
		cssEase: 'linear',
	};
	const slides = [
		'https://preview.redd.it/cft55rgmozn11.jpg?width=891&format=pjpg&auto=webp&s=a63265864edd3640b14b5df121fb8a01e07af8ea',
		'https://www.zbrushcentral.com/uploads/default/original/4X/d/d/8/dd886b37c406dc337e2d08cc49b56396be6ca3a7.jpeg',
		'https://p.turbosquid.com/ts-thumb/gx/RI7ZAd/EW/render_1/jpg/1687965923/1920x1080/fit_q87/7166fd719815f267100e7f14bc2433d4e16d7052/render_1.jpg',
		'https://media.cgtrader.com/variants/1oPmZRxgdCoshequwxRr2nNn/64d1262c1acde2eb3beef249c4695a8ad88c958dd79db36f763bf631017addd0/render_3.jpg',
	];
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='center'
			sx={{ py: 6 }}
		>
			<Grid item xs={12} md={8}>
				<Slider {...settings}>
					{slides.map((slide, count) => (
						<ImageCard key={count + 'char'} image={slide} />
					))}
				</Slider>
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
					Character Art
				</Typography>
				<Typography
					variant='subtitle'
					sx={{
						color: (theme) => theme.palette.primary.light,
					}}
				>
					There will be some small section here to talk about the art. There
					will be some small section here to talk about the art
				</Typography>
				<Box>
					<Button sx={{ textTransform: 'none', mt: 2, pl: 0 }}>
						View Full Galery
					</Button>
				</Box>
			</Grid>
			<Grid item xs={12} md={8} sx={{ mt: 10 }}>
				<Slider {...settings}>
					{slides.map((slide, count) => (
						<ImageCard key={count + 'fan'} image={slide} />
					))}
				</Slider>
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
					Fan Art
				</Typography>
				<Typography
					variant='subtitle'
					sx={{
						color: (theme) => theme.palette.primary.light,
					}}
				>
					There will be some small section here to talk about the art. There
					will be some small section here to talk about the art
				</Typography>
				<Box>
					<Button sx={{ textTransform: 'none', mt: 2, pl: 0 }}>
						View Instagram
					</Button>
				</Box>
			</Grid>
			<Grid item xs={12} md={8} sx={{ mt: 10 }}>
				<Slider {...settings}>
					{slides.map((slide, count) => (
						<ImageCard key={count + 'fan'} image={slide} />
					))}
				</Slider>
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
					Products
				</Typography>
				<Typography
					variant='subtitle'
					sx={{
						color: (theme) => theme.palette.primary.light,
					}}
				>
					There will be some small section here to talk about the art. There
					will be some small section here to talk about the art
				</Typography>
				<Box>
					<Button
						component={Link}
						href='/store'
						sx={{ textTransform: 'none', mt: 2, pl: 0 }}
					>
						View Store
					</Button>
				</Box>
			</Grid>
		</Grid>
	);
};
