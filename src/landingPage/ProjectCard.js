import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const ProjectCard = ({ project }) => {
	const classes = {
		container: {
			background: `linear-gradient(135deg, ${project.background}, ${project.background}e6)`,
			padding: '1rem',
			borderRadius: '1rem',
			maxWidth: '400px',
			cursor: 'pointer',
			transition: 'all 0.5s ease',
			color: '#FCFCFC',
			boxShadow: '1px 2px 3px rgba(0,0,0,0.2)',
			textDecoration: 'none !important',
			'&:hover': {
				transform: 'translateY(-5px)',
				boxShadow: '1px 4px 3px rgba(0,0,0,0.2)',
				background: `linear-gradient(135deg, ${project.background}, ${project.background}80)`,
			},
		},
		name: {
			fontWeight: 600,
			fontSize: '20px',
		},
		description: {
			fontSize: '14px',
			fontWeight: 400,
			opacity: 0.75,
		},
		tags: {
			fontSize: '12px',
			fontWeight: 400,
			opacity: 0.75,
		},
	};
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justifyContent='center'
			sx={classes.container}
			component={Link}
			href={project.link || project.route}
			target='__blank'
		>
			<Grid item xs={12} sx={{ paddingBottom: '16px' }}>
				<Typography sx={classes.name}>{project.name}</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{ paddingBottom: '16px', height: '58px', overflowY: 'auto' }}
			>
				<Typography sx={classes.description}>{project.description}</Typography>
			</Grid>
			<Grid item xs={12} className='pb-8'>
				<Typography sx={classes.description}>{project.company}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography sx={classes.tags}>{project.tags}</Typography>
			</Grid>
		</Grid>
	);
};
