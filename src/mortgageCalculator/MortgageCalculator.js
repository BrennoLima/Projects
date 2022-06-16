import React from 'react';
// Components
import { PaymentPlan } from './components/PaymentPlan';
import { PrepaymentPlan } from './components/PrepaymentPlan';
// Material UI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

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
				<Grid item xs={12} md={6}>
					<PaymentPlan />
				</Grid>
				<Grid item xs={12} md={6}>
					<PrepaymentPlan />
				</Grid>
			</Grid>
		</Container>
	);
};
