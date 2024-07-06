import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';

export const GraphicDesign = () => {
	const ImageCard = ({ text, image }) => (
		<Card
			sx={{
				position: 'relative',
				'&::before': {
					content: '""',
					position: 'absolute',
					left: 0,
					top: 0,
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundImage: `url(${image})`,
					backgroundPosition: 'center',
					filter: 'brightness(50%)',
				},
				height: 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography
				fontWeight='medium'
				sx={{ color: '#FFF', zIndex: 1, px: '25%', textAlign: 'center' }}
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
				<Typography fontWeight='bold' variant='h4' textAlign='center'>
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
					<Grid item xs={12} md={3} sx={{ width: 1, height: '35vh' }}>
						<ImageCard
							text='Fishing brand & Package design'
							image='https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg'
						/>
					</Grid>
					<Grid item xs={12} md={3} sx={{ width: 1, height: '35vh' }}>
						<ImageCard
							text='Fishing brand & Package design'
							image='https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg'
						/>
					</Grid>
					<Grid item xs={12} md={3} sx={{ width: 1, height: '35vh' }}>
						<ImageCard
							text='Fishing brand & Package design'
							image='https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg'
						/>
					</Grid>
					<Grid item xs={12} md={3} sx={{ width: 1, height: '35vh' }}>
						<ImageCard
							text='Fishing brand & Package design'
							image='https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg'
						/>
					</Grid>
					<Grid item xs={12} md={3} sx={{ width: 1, height: '35vh' }}>
						<ImageCard
							text='Fishing brand & Package design'
							image='https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg'
						/>
					</Grid>
					<Grid item xs={12} md={3} sx={{ width: 1, height: '35vh' }}>
						<ImageCard
							text='Fishing brand & Package design'
							image='https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg'
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
