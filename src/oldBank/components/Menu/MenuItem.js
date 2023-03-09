import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const MenuItem = ({ item }) => {
	const classes = {
		button: {
			background: '#68492f',
			borderRadius: '0.3rem',
			padding: '0.2rem 3rem',
			marginTop: '0.4rem',
			transition: 'all 0.5s ease',
			border: '1px solid #68492f',
		},
		title: {
			fontSize: '1rem',
			fontWeight: 'semi-bold',
			color: '#FFF',
			fontFamily: 'Gentium Book Plus',
			display: 'inline',
			textTransform: 'none',
		},
		item: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'&:hover': {
				'& .image': {
					verticalAlign: 'middle',
					transform: 'scale(1.03)',
				},
			},
		},
		image: {
			cursor: 'pointer',
			width: '150px',
			height: '150px',
			borderRadius: '50%',
			border: '1px solid #49230680',
			transition: 'all 1s ease',
		},
	};
	return (
		<Grid container direction='row' alignItems='center' justify='center'>
			<Grid item xs={12} sx={classes.item}>
				<Link href={`/menu/${item.category}`}>
					<img
						style={classes.image}
						alt={item.title}
						src={item.image}
						className='image'
					/>
				</Link>
			</Grid>
			<Grid item xs={12} className='flex items-center justify-center'>
				<Button
					variant='outlined'
					style={classes.button}
					type='link'
					href={`/menu/${item.category}`}
				>
					<Typography align='center' style={classes.title}>
						{item.title}
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};
