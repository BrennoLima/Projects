import React from 'react';
// Components
import { GuyCalc } from '../../components/SVGs/GuyCalc';
// Material UI
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Hero = ({ paymentPlanRef }) => {
	const classes = {
		startBtn: {
			textTransform: 'none',
			color: 'white',
			padding: '0.5rem 2rem',
			borderRadius: '2rem',
			background: '#e8a825',
			marginTop: '16px',
			fontSize: '18px',
			transition: 'all 0.25s ease',
			'&:hover': {
				background: '#cf9621',
			},
		},
	};

	const start = () => {
		paymentPlanRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Grid
			container
			direction='row'
			alignItems='stretch'
			justifyContent='center'
		>
			<Grid
				item
				xs={12}
				md={7}
				className='md:pt-8 flex items-center justify-center md:pl-16'
			>
				<div className='w-full'>
					<Typography className='white font-semibold text-32 mb-4'>
						Mortgage Payment Calculator
					</Typography>
					<Typography className='semiWhite font-normal text-16'>
						Quickly see what your mortgage payments might look like
					</Typography>
					<Button sx={classes.startBtn} size='small' onClick={start}>
						Start now
					</Button>
				</div>
			</Grid>
			<Grid item xs={12} md={5} className='pt-8'>
				<GuyCalc />
			</Grid>
			<Grid item xs={12} className='pt-16'>
				<Divider sx={{ background: '#c4c4cc' }} />
			</Grid>
		</Grid>
	);
};
