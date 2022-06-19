import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const CalculationTable = () => {
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
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow sx={classes.darkRow}>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow sx={classes.darkRow}>
							<TableCell>
								<Typography sx={classes.tableWriting}>
									<span key='amout'>
										<i className='fas fa-info-circle mr-2' />
									</span>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
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
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
							<TableCell sx={classes.borderLeft}>
								<Typography sx={classes.tableWriting}>
									{'row.calories'}
								</Typography>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Grid>
		</Grid>
	);
};
