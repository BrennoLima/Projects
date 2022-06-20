import React, { useRef } from 'react';
// Components
import { PaymentPlan } from './components/PaymentPlan';
import { PrepaymentPlan } from './components/PrepaymentPlan';
import { CalculationTable } from './components/CalculationTable';
import { PaymentDiagram } from './components/PaymentDiagram';
import { GuyCalc } from '../components/SVGs/GuyCalc';
// Material UI
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const MortgageCalculator = () => {
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
	const paymentPlanRef = useRef(null);
	const start = () => {
		paymentPlanRef.current.scrollIntoView({ behaviour: 'smooth' });
	};

	return (
		<Container>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justify='center'
				className='pt-16 pb-16'
			>
				<Grid
					item
					xs={12}
					md={7}
					className='md:pt-8 flex items-center justify-center md:pl-16'
				>
					<div className='w-full'>
						<Typography
							className='font-semibold text-32 mb-4'
							sx={{ color: 'white' }}
						>
							Mortgage Payment Calculator
						</Typography>
						<Typography
							className='font-normal text-16'
							sx={{ color: '#c4c4cc' }}
						>
							Quickly See What Your Mortgage Payments Might Look Like
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
				<Grid
					item
					xs={12}
					md={6}
					className='pt-16 pb-4 md:pr-4'
					ref={paymentPlanRef}
				>
					<PaymentPlan />
				</Grid>
				<Grid item xs={12} md={6} className='pt-16 pb-4 md:pl-4'>
					<PrepaymentPlan />
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography
						className='font-semibold text-20 pb-4'
						sx={{ color: 'white' }}
					>
						Calculation Summary
					</Typography>
					<CalculationTable />
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography
						className='font-semibold text-20 pb-4'
						sx={{ color: 'white' }}
					>
						Mortgage Summary
					</Typography>
					<Typography sx={{ color: '#c4c4cc' }}>
						Over the 25-year amortization period, you will:
					</Typography>
					<Typography className='pl-8' sx={{ color: '#c4c4cc' }}>
						have made 300 monthly (12x per year) payments of $58,160.50.
					</Typography>
					<Typography className='pl-8' sx={{ color: '#c4c4cc' }}>
						have paid $10,000,000.00 in principal, $7,448,149.55 in interest,
						for a total of $17,448,149.55.
					</Typography>
					<Typography sx={{ color: '#c4c4cc' }}>
						Over the 5-year term, you will:
					</Typography>
					<Typography className='pl-8' sx={{ color: '#c4c4cc' }}>
						have made 60 monthly (12x per year) payments of $58,160.50.
					</Typography>
					<Typography className='pl-8' sx={{ color: '#c4c4cc' }}>
						have paid $1,149,249.27 in principal, $2,340,380.63 in interest, for
						a total of $3,489,629.90.
					</Typography>
					<Typography sx={{ color: '#c4c4cc' }}>
						At the end of your 5-year term, you will:
					</Typography>
					<Typography className='pl-8' sx={{ color: '#c4c4cc' }}>
						have a balance of $8,850,750.73.
					</Typography>
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography
						className='font-semibold text-20 pb-4'
						sx={{ color: 'white' }}
					>
						Payment Diagram
					</Typography>
					<PaymentDiagram />
				</Grid>
			</Grid>
		</Container>
	);
};
