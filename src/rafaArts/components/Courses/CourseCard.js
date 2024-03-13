import React, { useEffect } from 'react';
import {
	Typography,
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
} from '@mui/material';
import gsap from 'gsap';

export const CourseCard = ({ image, title, description, id }) => {
	useEffect(() => {
		gsap.fromTo(
			`#course-card-${id}`,
			{ opacity: 0, y: 50 },
			{
				scrollTrigger: `#course-card-${id}`,
				opacity: '100%',
				y: 0,
				duration: 1,
			}
		);
	}, [id]);

	return (
		<Card
			sx={{
				maxWidth: 345,
			}}
			id={`course-card-${id}`}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					src={image}
					alt={title}
					sx={{
						height: '180px',
						transition: '0.5s all linear',
						'&:hover': {
							transform: 'scale(1.05)',
						},
					}}
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
