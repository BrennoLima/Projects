import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const CalculationTable = ({
	monthlyPayment,
	totalNumberOfPayments,
	totalInterest,
	paymentsPerTerm,
	termMortgageCost,
	totalMortageCost,
	totalPaidPrincipalByTerm,
	totalPaidInterestByTerm,
	amount,
}) => {
	const classes = {
		container: {
			border: '1px solid white',
			borderRadius: '0.5rem',
		},
		table: {
			border: '1px solid #c4c4cc',
			borderRadius: '0.5rem',
		},
		tableHeadWriting: {
			color: '#C4C4CC',
			fontWeight: '600',
		},
		tableWriting: {
			color: '#C4C4CC',
		},
		borderLeft: {
			borderLeft: '1px solid #c4c4cc',
		},
		darkRow: {
			background: '#00000033',
		},
	};
	return (
		<Grid container direction='row' alignItems='center' justifyContent='center'>
			<Grid item xs={12} sx={classes.table}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								<Typography sx={classes.tableHeadWriting}>Category</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableHeadWriting}>Term</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableHeadWriting}>
									Amortization Period
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow sx={classes.darkRow}>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									Number of Payments
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{paymentsPerTerm}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{totalNumberOfPayments}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									Mortgage Payment
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(monthlyPayment).toFixed(2)
									)}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(monthlyPayment).toFixed(2)
									)}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow sx={classes.darkRow}>
							{/**
							 * Prepayment is disabled to simplify
							 */}
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									Prepayment
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>$0.00</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>$0.00</Typography>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									Principal Payments
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(totalPaidPrincipalByTerm).toFixed(2)
									)}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(amount).toFixed(2)
									)}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow sx={classes.darkRow}>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									Interest Payments
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(totalPaidInterestByTerm).toFixed(2)
									)}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(totalInterest).toFixed(2)
									)}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow
							sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } }}
						>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									Total Cost
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(termMortgageCost).toFixed(2)
									)}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									$
									{new Intl.NumberFormat('en-US').format(
										Number(totalMortageCost).toFixed(2)
									)}
								</Typography>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Grid>
		</Grid>
	);
};
