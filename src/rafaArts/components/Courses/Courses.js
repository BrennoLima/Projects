import React, { useEffect } from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { useTheme } from '@emotion/react';
import { CourseCard } from './CourseCard';
// GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Courses = () => {
	const theme = useTheme();
	useEffect(() => {
		gsap.fromTo(
			`#course-title`,
			{ opacity: 0, y: 50 },
			{
				scrollTrigger: `#course-title`,
				opacity: '100%',
				y: 0,
				duration: 1,
			}
		);
	}, []);

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
					className='course-container'
				>
					<Grid item xs={12}>
						<Typography
							align='center'
							variant='h4'
							color='text.primary'
							fontWeight={600}
							sx={{ my: [4, 8], letterSpacing: '2px' }}
							id='course-title'
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
							id={1}
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
							id={2}
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
							id={3}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
