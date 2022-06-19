import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

export const PrepaymentPlan = () => {
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
				<Typography className='font-semibold text-16'>
					Prepayment Plan
				</Typography>
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
							Prepayment Amount:
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
							Prepayment Frequency:
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

							SelectProps={{
								classes: { iconOutlined: { color: 'white !important' } },
								MenuProps: {
									getcontentanchorel: null,
									style: { maxHeight: '250px' },
								},
							}}
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
							Start With Payment:
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
						<TextField
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
