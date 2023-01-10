import React from 'react';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';

export const SlideItem = ({ slide }) => {
	const { width } = useWindowDimensions();
	const classes = {
		subtitle: {
			fontSize: '1.2rem',
			fontWeight: 'normal',
			opacity: 0.8,
			fontFamily: 'Gentium Book Plus',
			color: '#4a4637',
		},
		image: {
			borderRadius: width > 768 ? '0.3rem' : '0',
			boxShadow: 'rgb(78 76 64 / 20%) 1px 2px 3px',
		},
		title: {
			letterSpacing: '1px',
			fontWeight: 600,
			fontSize: width > 768 ? '2rem' : '1.4rem',
			color: '#6e6955',
			fontFamily: 'Gentium Book Plus',
		},
		actionBtn: {
			textTransform: 'none',
			color: '#836801',
			borderRadius: '0.3rem',
			padding: '0.5rem 2rem',
			transition: 'all 0.5s ease',
			border: '1px solid #836801',
			'&:hover': {
				background: '#0000000d',
				color: '#836801',
				boxShadow: '1px 2px 2px rgba(0,0,0,0.1)',
			},
		},
	};

	return (
		<Grid
			container
			direction='row'
			alignItems='stretch'
			justifyContent='center'
			className='py-10'
			sx={{ width: '100%' }}
		>
			<Grid
				item
				xs={12}
				md={6}
				className='md:p-2 fadeLeft2'
				sx={{ zIndex: '5' }}
			>
				<img src={slide.imgSrc} alt='old-bank' style={classes.image} />
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginLeft: width > 768 ? '-2rem' : null,
				}}
				className='fadeRight2'
			>
				<div
					className='w-full p-8 md:px-16'
					style={{
						background: '#fff7d6',
						borderRadius: '0.3rem',
					}}
				>
					<Typography sx={classes.title} className='pb-4'>
						{slide.title}
					</Typography>
					<Typography className='pb-4' sx={classes.subtitle}>
						{slide.description}
					</Typography>
					<Button
						sx={classes.actionBtn}
						startIcon={<i className={slide.button.icon} />}
					>
						{slide.button.text}
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};
