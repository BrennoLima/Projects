import React from 'react';
// Components
import { Payment } from './Payment';
// Material UI
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';

export const CheckoutSteps = ({ activeStep, steps }) => {
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justifyContent='center'
			className='md:p-10'
		>
			<Grid item xs={12} className='flex items-center'>
				<Hidden mdDown>
					<div className='stepper-number complete-stepper-number m-0'>
						{activeStep + 1}
					</div>
				</Hidden>

				<Typography className='pl-4 font-medium text-18'>
					{steps[activeStep]}
				</Typography>
			</Grid>
			{activeStep === 0 && steps[activeStep]}
			{activeStep === 1 && steps[activeStep]}
			{activeStep === 2 && steps[activeStep]}
			{activeStep === 3 && (
				<Grid item xs={12}>
					<Payment />
				</Grid>
			)}
			{activeStep === 4 && steps[activeStep]}
		</Grid>
	);
};
