import React from 'react';
import clsx from 'clsx';
// Material UI
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';

export const PaymentPlan = () => {
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
			'& .MuiOutlinedInput-root': {
				borderRadius: '0.5rem',
				color: '#c4c4cc',
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
							<span key='amout'>
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
							// value={searchInput}
							// onChange={(e) => setSearchInput(e.target.value)}
							InputProps={{
								startAdornment: (
									<InputAdornment className='pr-2'>
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
							<span key='amout'>
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
							// value={searchInput}
							// onChange={(e) => setSearchInput(e.target.value)}
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
							<span key='amout'>
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
						justify='center'
					>
						<Grid item xs={12} md={6} className='p-0 md:pr-2'>
							<TextField
								select
								variant='outlined'
								color='primary'
								sx={classes.roundInput}
								size='small'
								autoComplete='off'
								// value={searchInput}
								// onChange={(e) => setSearchInput(e.target.value)}

								SelectProps={{
									classes: { iconOutlined: { color: 'white !important' } },
									MenuProps: {
										getcontentanchorel: null,
										style: { maxHeight: '250px' },
									},
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6} className='pt-2 md:pt-0 '>
							<TextField
								select
								variant='outlined'
								color='primary'
								sx={classes.roundInput}
								size='small'
								autoComplete='off'
								// value={searchInput}
								// onChange={(e) => setSearchInput(e.target.value)}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} container className='pb-4 flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amout'>
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
							// value={searchInput}
							// onChange={(e) => setSearchInput(e.target.value)}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} container className='flex items-center'>
					<Grid item xs={12} md={5} className='pb-2 md:p-0'>
						<Typography
							className='font-semibold text-16 flex items-center'
							sx={classes.white}
						>
							<span key='amout'>
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
							// value={searchInput}
							// onChange={(e) => setSearchInput(e.target.value)}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
