import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const MortgageSummary = ({ amortization }) => {
	return (
		<Grid container direction='row' alignItems='stretch' justify='center'>
			<Grid item xs={12}>
				<Typography className='semiWhite'>
					Over the{' '}
					<b className='white'>
						{amortization.years}{' '}
						{amortization.months ? `and ${amortization.months}` : null}
					</b>{' '}
					amortization period, you will:
				</Typography>
				<Typography className='semiWhite pl-8'>
					∙ have made 300 monthly (12x per year) payments of $58,160.50.
				</Typography>
				<Typography className='semiWhite pl-8'>
					∙ have paid $10,000,000.00 in principal, $7,448,149.55 in interest,
					for a total of $17,448,149.55.
				</Typography>
				<Typography className='semiWhite'>
					Over the 5-year term, you will:
				</Typography>
				<Typography className='semiWhite pl-8'>
					∙ have made 60 monthly (12x per year) payments of $58,160.50.
				</Typography>
				<Typography className='semiWhite pl-8'>
					∙ have paid $1,149,249.27 in principal, $2,340,380.63 in interest, for
					a total of $3,489,629.90.
				</Typography>
				<Typography className='semiWhite'>
					At the end of your 5-year term, you will:
				</Typography>
				<Typography className='semiWhite pl-8'>
					∙ have a balance of $8,850,750.73.
				</Typography>
			</Grid>
		</Grid>
	);
};
