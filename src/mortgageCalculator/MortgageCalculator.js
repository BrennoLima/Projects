import React from 'react';
// Components
import { PaymentPlan } from './components/PaymentPlan';
import { PrepaymentPlan } from './components/PrepaymentPlan';
import { CalculationTable } from './components/CalculationTable';
import { PaymentDiagram } from './components/PaymentDiagram';
// Material UI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const MortgageCalculator = () => {
	return (
		<Container>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justify='center'
				className='py-10'
			>
				<Grid item xs={12} className='pt-8'>
					<Typography
						className='font-semibold text-20'
						sx={{ color: '#c4c4cc' }}
					>
						Mortgage Calculator
					</Typography>
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography className='font-normal text-16' sx={{ color: '#c4c4cc' }}>
						This calculator determines your mortgage payment and provides you
						with a mortgage payment schedule. The calculator also shows how much
						money and how many years you can save by making prepayments. To help
						determine whether or not you qualify for a home mortgage based on
						income and expenses, visit the Mortgage Qualifier Tool.
					</Typography>
				</Grid>
				<Grid item xs={12} md={6} className='pt-8 pb-4 md:pr-4'>
					<PaymentPlan />
				</Grid>
				<Grid item xs={12} md={6} className='pt-8 pb-4 md:pl-4'>
					<PrepaymentPlan />
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography
						className='font-semibold text-20 pb-4'
						sx={{ color: '#c4c4cc' }}
					>
						Calculation Summary
					</Typography>
					<CalculationTable />
				</Grid>
				<Grid item xs={12} className='pt-8'>
					<Typography
						className='font-semibold text-20 pb-4'
						sx={{ color: '#c4c4cc' }}
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
						sx={{ color: '#c4c4cc' }}
					>
						Payment Diagram
					</Typography>
					<PaymentDiagram />
				</Grid>
			</Grid>
		</Container>
	);
};
