import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';

export const PaymentPlan = ({
	amount,
	setAmount,
	interest,
	setInterest,
	amortization,
	setAmortization,
	paymentFrequency,
	setPaymentFrequency,
	term,
	setTerm,
}) => {
	const classes = {
		container: {
			border: '1px solid white',
			borderRadius: '0.5rem',
		},
		titleContainer: {
			background: '#ffffffbf',
			padding: '1rem',
			borderRadius: '0.5rem 0.5rem 0 0 ',
		},
		roundInput: {
			width: '100%',
			'& .MuiSelect-iconOutlined': {
				color: '#c4c4cc',
			},
			'& .MuiOutlinedInput-root': {
				borderRadius: '0.5rem',
				color: '#c4c4cc',
				background: '#00000033',
				'& fieldset': {
					borderColor: '#c4c4cc',
				},
				'&:hover fieldset': {
					borderColor: '#c4c4cc',
				},
				'&.Mui-focused fieldset': {
					borderColor: '#c4c4cc',
				},
			},
		},
		white: {
			color: '#c4c4cc',
		},
	};
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justifyContent='center'
			sx={classes.container}
		>
			<Grid item xs={12} sx={classes.titleContainer}>
				<Typography className='font-semibold text-16'>Payment Plan</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				className='p-4'
			>
				<Grid item xs={12} container className='pb-4 flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amount'>
								<i className='fas fa-info-circle mr-2' />
							</span>
							Mortgage Amount:
						</Typography>
					</Grid>
					<Grid item xs={12} md={7}>
						<TextField
							variant='outlined'
							color='primary'
							sx={classes.roundInput}
							size='small'
							autoComplete='off'
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start' className='pr-2'>
										<i className='fas fa-dollar-sign' style={classes.white} />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} container className='pb-4 flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amount'>
								<i className='fas fa-info-circle mr-2' />
							</span>
							Interest Rate:
						</Typography>
					</Grid>
					<Grid item xs={12} md={7}>
						<TextField
							variant='outlined'
							color='primary'
							sx={classes.roundInput}
							size='small'
							autoComplete='off'
							value={interest}
							onChange={(e) => setInterest(e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<i className='fas fa-percentage' style={classes.white} />
									</InputAdornment>
								),
							}}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} container className='pb-4 flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amount'>
								<i className='fas fa-info-circle mr-2' />
							</span>
							Amortization Period:
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={7}
						container
						direction='row'
						alignItems='center'
						justifyContent='center'
					>
						<Grid item xs={12} md={6} className='p-0 md:pr-2'>
							<TextField
								select
								variant='outlined'
								color='primary'
								sx={classes.roundInput}
								size='small'
								autoComplete='off'
								value={amortization.years}
								onChange={(e) =>
									setAmortization({ ...amortization, years: e.target.value })
								}
								SelectProps={{
									classes: { iconOutlined: { color: 'white !important' } },
									MenuProps: {
										getcontentanchorel: null,
										style: { maxHeight: '250px' },
									},
								}}
							>
								<MenuItem value={1}>1 Year</MenuItem>
								<MenuItem value={2}>2 Years</MenuItem>
								<MenuItem value={3}>3 Years</MenuItem>
								<MenuItem value={4}>4 Years</MenuItem>
								<MenuItem value={5}>5 Years</MenuItem>
								<MenuItem value={6}>6 Years</MenuItem>
								<MenuItem value={7}>7 Years</MenuItem>
								<MenuItem value={8}>8 Years</MenuItem>
								<MenuItem value={9}>9 Years</MenuItem>
								<MenuItem value={10}>10 Years</MenuItem>
								<MenuItem value={11}>11 Year</MenuItem>
								<MenuItem value={12}>12 Years</MenuItem>
								<MenuItem value={13}>13 Years</MenuItem>
								<MenuItem value={14}>14 Years</MenuItem>
								<MenuItem value={15}>15 Years</MenuItem>
								<MenuItem value={16}>16 Years</MenuItem>
								<MenuItem value={17}>17 Years</MenuItem>
								<MenuItem value={18}>18 Years</MenuItem>
								<MenuItem value={19}>19 Years</MenuItem>
								<MenuItem value={20}>20 Years</MenuItem>
								<MenuItem value={21}>21 Year</MenuItem>
								<MenuItem value={22}>22 Years</MenuItem>
								<MenuItem value={23}>23 Years</MenuItem>
								<MenuItem value={24}>24 Years</MenuItem>
								<MenuItem value={25}>25 Years</MenuItem>
								<MenuItem value={26}>26 Years</MenuItem>
								<MenuItem value={27}>27 Years</MenuItem>
								<MenuItem value={28}>28 Years</MenuItem>
								<MenuItem value={29}>29 Years</MenuItem>
								<MenuItem value={30}>30 Years</MenuItem>
							</TextField>
						</Grid>
						<Grid item xs={12} md={6} className='pt-2 md:pt-0 '>
							<TextField
								select
								variant='outlined'
								color='primary'
								sx={classes.roundInput}
								size='small'
								autoComplete='off'
								value={amortization.months}
								onChange={(e) =>
									setAmortization({ ...amortization, months: e.target.value })
								}
								SelectProps={{
									classes: { iconOutlined: { color: 'white !important' } },
									MenuProps: {
										getcontentanchorel: null,
										style: { maxHeight: '250px' },
									},
								}}
							>
								<MenuItem value={0}>-</MenuItem>
								<MenuItem value={1}>1 Month</MenuItem>
								<MenuItem value={2}>2 Months</MenuItem>
								<MenuItem value={3}>3 Months</MenuItem>
								<MenuItem value={4}>4 Months</MenuItem>
								<MenuItem value={5}>5 Months</MenuItem>
								<MenuItem value={6}>6 Months</MenuItem>
								<MenuItem value={7}>7 Months</MenuItem>
								<MenuItem value={8}>8 Months</MenuItem>
								<MenuItem value={9}>9 Months</MenuItem>
								<MenuItem value={10}>10 Months</MenuItem>
								<MenuItem value={11}>11 Months</MenuItem>
							</TextField>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container className='pb-4 flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amount'>
								<i className='fas fa-info-circle mr-2' />
							</span>
							Payment Frequency:
						</Typography>
					</Grid>
					<Grid item xs={12} md={7}>
						<TextField
							select
							variant='outlined'
							color='primary'
							sx={classes.roundInput}
							size='small'
							autoComplete='off'
							value={paymentFrequency}
							onChange={(e) => setPaymentFrequency(e.target.value)}
							SelectProps={{
								classes: { iconOutlined: { color: 'white !important' } },
								MenuProps: {
									getcontentanchorel: null,
									style: { maxHeight: '250px' },
								},
							}}
						>
							<MenuItem disabled value={'Accelerated Weekly'}>
								Accelerated Weekly
							</MenuItem>
							<MenuItem disabled value={'Weekly'}>
								Weekly
							</MenuItem>
							<MenuItem disabled value={'Accelerated Bi-weekly'}>
								Accelerated Bi-weekly
							</MenuItem>
							<MenuItem disabled value={'Bi-weekly (every 2 weeks)'}>
								Bi-weekly (every 2 weeks)
							</MenuItem>
							<MenuItem disabled value={'Semi-monthly (24x per year)'}>
								Semi-monthly (24x per year)
							</MenuItem>
							<MenuItem value={'Monthly (12x per year)'}>
								Monthly (12x per year)
							</MenuItem>
						</TextField>
					</Grid>
				</Grid>
				<Grid item xs={12} container className='flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amount'>
								<i className='fas fa-info-circle mr-2' />
							</span>
							Term:
						</Typography>
					</Grid>
					<Grid item xs={12} md={7}>
						<TextField
							select
							variant='outlined'
							color='primary'
							sx={classes.roundInput}
							size='small'
							autoComplete='off'
							value={term}
							onChange={(e) => setTerm(e.target.value)}
							SelectProps={{
								classes: { iconOutlined: { color: 'white !important' } },
								MenuProps: {
									getcontentanchorel: null,
									style: { maxHeight: '250px' },
								},
							}}
						>
							<MenuItem value={1}>1 Year</MenuItem>
							<MenuItem value={2}>2 Years</MenuItem>
							<MenuItem value={3}>3 Years</MenuItem>
							<MenuItem value={4}>4 Years</MenuItem>
							<MenuItem value={5}>5 Years</MenuItem>
							<MenuItem value={6}>6 Years</MenuItem>
							<MenuItem value={7}>7 Years</MenuItem>
							<MenuItem value={8}>8 Years</MenuItem>
							<MenuItem value={9}>9 Years</MenuItem>
							<MenuItem value={10}>10 Years</MenuItem>
						</TextField>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
