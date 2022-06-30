import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const MortgageSummary = ({
	amortization,
	term,
	totalNumberOfPayments,
	monthlyPayment,
	totalPaidPrincipalByTerm,
	totalPaidInterestByTerm,
	paymentsPerTerm,
	totalMortageCost,
	totalInterest,
	outstandingPrincipal,
}) => {
	return (
		<Grid
			container
			direction='row'
			alignItems='stretch'
			justifyContent='center'
		>
			<Grid item xs={12}>
				<Typography className='semiWhite pb-8'>
					Over the <b className='white'>{totalNumberOfPayments}</b> amortization
					period, you will:
				</Typography>
				{/**
				 * Simplified payment frequency to only -> Monthly (12x per year)
				 */}
				<Typography className='semiWhite pl-8'>
					• have made <b className='white'>{totalNumberOfPayments}</b> monthly
					(12x per year) payments of{' '}
					<b className='white'>
						${new Intl.NumberFormat('en-US').format(monthlyPayment.toFixed(2))}
					</b>
					.
				</Typography>
				<Typography className='semiWhite pl-8'>
					• have paid{' '}
					<b className='white'>
						$
						{new Intl.NumberFormat('en-US').format(
							(totalMortageCost - totalInterest).toFixed(2)
						)}
					</b>{' '}
					in principal,{' '}
					<b className='white'>
						${new Intl.NumberFormat('en-US').format(totalInterest.toFixed(2))}
					</b>{' '}
					in interest, for a total of{' '}
					<b className='white'>
						$
						{new Intl.NumberFormat('en-US').format(totalMortageCost.toFixed(2))}
					</b>
					.
				</Typography>
				<Typography className='semiWhite py-2'>
					Over the {term}-year term, you will:
				</Typography>
				{/**
				 * Simplified term to only -> 5 Years
				 */}
				<Typography className='semiWhite pl-8'>
					• have made <b className='white'>{paymentsPerTerm}</b> monthly (12x
					per year) payments of{' '}
					<b className='white'>
						${new Intl.NumberFormat('en-US').format(monthlyPayment.toFixed(2))}
					</b>
					.
				</Typography>
				<Typography className='semiWhite pl-8'>
					• have paid{' '}
					<b className='white'>
						$
						{new Intl.NumberFormat('en-US').format(
							totalPaidPrincipalByTerm.toFixed(2)
						)}
					</b>{' '}
					in principal,{' '}
					<b className='white'>
						$
						{new Intl.NumberFormat('en-US').format(
							totalPaidInterestByTerm.toFixed(2)
						)}
					</b>{' '}
					in interest, for a total of{' '}
					<b className='white'>
						$
						{new Intl.NumberFormat('en-US').format(
							(totalPaidPrincipalByTerm + totalPaidInterestByTerm).toFixed(2)
						)}
					</b>
					.
				</Typography>
				<Typography className='semiWhite py-2'>
					At the end of your 5-year term, you will:
				</Typography>
				<Typography className='semiWhite pl-8'>
					• have a balance of{' '}
					<b className='white'>
						$
						{new Intl.NumberFormat('en-US').format(
							outstandingPrincipal.toFixed(2)
						)}
					</b>
					.
				</Typography>
			</Grid>
		</Grid>
	);
};
