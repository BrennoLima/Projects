import React from 'react';
import {
	Box,
	Grid,
	Typography,
	Container,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
} from '@mui/material';
import { useTheme } from '@emotion/react';

const CourseCard = ({ image, title, description, action }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					src={image}
					alt={title}
					sx={{ height: '180px' }}
				/>
				<CardContent>
					<Typography gutterBottom variant='h6' component='div'>
						{title}
					</Typography>
					<Typography variant='caption' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export const Courses = () => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				background: `linear-gradient(180deg, ${theme.palette.background.paper}, ${theme.palette.divider})`,
				py: 5,
				display: 'flex',
				alignItems: 'center',
			}}
			id='courses'
		>
			<Container>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='space-between'
				>
					<Grid item xs={12}>
						<Typography
							align='center'
							variant='h4'
							color='text.primary'
							fontWeight={600}
							sx={{ my: [4, 8] }}
						>
							Courses
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sx={{ mt: [2, 10], display: 'flex', justifyContent: 'center' }}
					>
						<CourseCard
							title='Face Anatomy'
							description='Designed to take you through the anatomy of the face, covering muscles, ligaments, facial, bones, veins & nerves.'
							image='https://img.freepik.com/free-photo/3d-male-medical-figure-with-close-up-face-with-half-showing-muscle-map_1048-18783.jpg?size=1026&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais'
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sx={{ mt: [2, 0], display: 'flex', justifyContent: 'center' }}
					>
						<CourseCard
							title='Zbrush'
							description='Zbrush Made Easy! Ultimate Zbrush 3d sculpting course for beginners/intermediate.'
							image='https://i.ytimg.com/vi/_yKGfcp2z3k/maxresdefault.jpg'
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={3}
						sx={{ mt: [2, 10], display: 'flex', justifyContent: 'center' }}
					>
						<CourseCard
							title='Character Art'
							description='Learn the complete fundamentals of Character Drawing, so you can learn to draw professional art and illustrations.'
							image='https://static.skillshare.com/uploads/video/thumbnails/ff86a60ffdb5c8de8e38b62e62dd67ad/448-252'
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
