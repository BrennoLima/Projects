import React, { useState, useEffect } from 'react';
import moment from 'moment';
// Components
import { Card } from './Card';
// Material UI
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const classes = {
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paymentContainer: {
		borderRadius: '1rem',
		boxShadow: '1px 2px 15px rgba(0,0,0,0.2)',
		width: '100%',
		marginTop: '-120px',
		paddingTop: '120px',
		background: '#00000066',
		backdropFilter: 'blur(20px)',
	},
	cardContainer: {
		width: '100%',
		background: '#c7c7c7',
	},
	formContainer: {
		border: '1px solid rgb(255 255 255 / 50%)',
		borderRadius: '1rem',
		padding: '1rem',
		height: 'calc(100% - 32px)',
		background: '#ffffffe6',
	},
	formText: {
		color: '#424242',
		fontSize: '14px',
	},
	roundInput: {
		width: '100%',
		'& label.Mui-focused': {
			color: '#4D5C6F',
		},
		'& 	.Mui-error': {
			borderColor: 'red !important',
		},
		'& .MuiOutlinedInput-root': {
			borderRadius: '0.75rem',
			background: 'white',
			color: '#2C3642',
			'& fieldset': {
				borderColor: '#A5B6CD',
			},
			'&:hover fieldset': {
				borderColor: '#127C95',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#127C95',
			},
		},
	},
	radio: {
		color: '#B1BDCD',
		'&:hover': {
			color: '#5D7494',
		},
		'&.MuiRadio-root': {
			padding: 0,
		},
		'&.Mui-checked': {
			color: '#127C95',
		},
	},
	continueBtn: {
		textTransform: 'none',
		background: '#127C95',
		'&:hover': {
			background: '#3C727E',
		},
		'&.Mui-disabled': {
			color: 'white',
			background: '#C8CDD2',
		},
	},
	backBtn: {
		textTransform: 'none',
		color: '#127C95',
		borderColor: '#127C95',
		'&:hover': {
			borderColor: '#3C727E',
			color: '#3C727E',
		},
	},
};

export const CreativeCard = () => {
	//////////// State/Control
	const [months] = useState([
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	]);
	const [selectedMonth, setSelectedMonth] = useState('');
	const [years] = useState([
		'2022',
		'2023',
		'2024',
		'2025',
		'2026',
		'2027',
		'2028',
		'2029',
		'2030',
		'2031',
		'2032',
	]);
	const [selectedYear, setSelectedYear] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [nameOnCard, setNameOnCard] = useState('');
	const [cvv, setCvv] = useState('');
	const [billingAddress, setBillingAddress] = useState('');
	// validation
	const [nameError, setNameError] = useState(false);
	const [cardError, setCardError] = useState(false);
	const [cvvError, setCvvError] = useState(false);
	const [yearError, setYearError] = useState(false);
	const [monthError, setMonthError] = useState(false);
	// control
	const [activeCard, setActiveCard] = useState('');
	const [front, setFront] = useState(null);

	useEffect(() => {
		// checks if date is past
		if (selectedMonth !== '' && selectedYear !== '') {
			let invalidDate = moment(
				`${selectedMonth}-${selectedYear}`,
				'MMM-YYYY'
			).isBefore(moment());
			if (invalidDate) {
				setYearError(true);
				setMonthError(true);
			} else {
				setYearError(false);
				setMonthError(false);
			}
		}
	}, [selectedYear, selectedMonth]);

	const onChangeName = (e) => {
		let { value } = e.target;
		setNameOnCard(value);
		// this regex returns false if there is a symbol
		let hasNoSymbolReg = new RegExp(/^[A-Za-z0-9 ]+$/);
		let hasNoSpacesReg = new RegExp(/^[A-Za-z]*$|^[A-Za-z][A-Za-z ]*[A-Za-z]$/);

		// console.log('hasNoSymbolReg ' + hasNoSymbolReg.test(value));
		// console.log('hasNoSpacesReg ' + hasNoSpacesReg.test(value));
		setNameError(!(hasNoSymbolReg.test(value) && hasNoSpacesReg.test(value)));
	};
	const onChangeCard = (e) => {
		let { value } = e.target;
		let visaCardReg = new RegExp(/^4[0-9]{6,}$/);
		let masterCardReg = new RegExp(/^5[1-5][0-9]{14}$/);
		setCardNumber(value);
		value = value.replaceAll(' ', '');
		// console.log('visa ' + visaCardReg.test(value));
		// console.log('master ' + masterCardReg.test(value));
		// remove white spaces
		// 16 digits
		if (value.replaceAll(' ', '').length === 16) {
			if (visaCardReg.test(value)) {
				setActiveCard('visa');
				setCardError(false);
			} else if (masterCardReg.test(value)) {
				setActiveCard('master');
				setCardError(false);
			} else {
				setActiveCard('');
				setCardError(true);
			}
		} else {
			setActiveCard('');
			setCardError(true);
		}
	};
	const onChangeCvv = (e) => {
		let { value } = e.target;
		setCvv(value);
		if (value.length !== 3) setCvvError(true);
		else setCvvError(false);
	};

	return (
		<div style={classes.container}>
			<Container>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
				>
					<Grid item xs={12} className='flex items-center justify-center'>
						<Card
							type={activeCard}
							selectedMonth={selectedMonth}
							selectedYear={selectedYear}
							cardNumber={cardNumber}
							nameOnCard={nameOnCard}
							cvv={cvv}
							front={front}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
						container
						sx={classes.paymentContainer}
						direction='row'
						alignItems='center'
						justifyContent='flex-start'
						className='px-4 pb-4'
					>
						<Grid
							item
							xs={12}
							container
							direction='row'
							alignItems='center'
							justifyContent={'center'}
							className='mt-16'
							sx={classes.formContainer}
						>
							<Grid item xs={12} sx={{ paddingBottom: '16px' }}>
								<Typography className='font-semibold' xs={classes.formText}>
									Payment Method
								</Typography>
							</Grid>
							{/**
							 * Name
							 */}
							<Grid item xs={12} sx={{ paddingBottom: '16px' }}>
								<TextField
									id='outlined-form-filter'
									variant='outlined'
									color='primary'
									sx={classes.roundInput}
									size='small'
									placeholder='Name on Card'
									autoComplete='off'
									value={nameOnCard}
									onChange={onChangeName}
									error={nameError}
									onFocus={() => setFront(true)}
									helperText={
										nameError ? (
											<Typography
												className='text-12'
												style={{ color: '#DA1E28' }}
											>
												Not empty, no symbols or spaces around the name are
												allowed
											</Typography>
										) : null
									}
								/>
							</Grid>
							{/**
							 * Card number
							 */}
							<Grid item xs={12} sx={{ paddingBottom: '16px' }}>
								<TextField
									id='outlined-form-filter'
									variant='outlined'
									color='primary'
									sx={classes.roundInput}
									size='small'
									placeholder='Card Number'
									autoComplete='off'
									value={cardNumber}
									onChange={onChangeCard}
									onFocus={() => setFront(true)}
									error={cardError}
									helperText={
										cardError ? (
											<Typography
												className='text-12'
												style={{ color: '#DA1E28' }}
											>
												Only Visa/MasterCard allowed. 16 Digits.
											</Typography>
										) : null
									}
								/>
							</Grid>
							{/**
							 * Month/Year/CVV
							 */}
							<Grid
								item
								xs={12}
								container
								direction='row'
								alignItems='stretch'
								justifyContent='center'
							>
								{/**
								 * Month
								 */}
								<Grid
									item
									xs={6}
									md={4}
									className='pr-2'
									sx={{ paddingBottom: '16px' }}
								>
									<TextField
										select
										id='outlined-form-filter'
										variant='outlined'
										color='primary'
										sx={classes.roundInput}
										onFocus={() => setFront(true)}
										size='small'
										label='Month'
										autoComplete='off'
										value={selectedMonth}
										onChange={(e) => setSelectedMonth(e.target.value)}
										SelectProps={{
											MenuProps: {
												getcontentanchorel: null,
												style: { maxHeight: '250px' },
											},
										}}
										error={monthError}
										helperText={
											monthError ? (
												<Typography
													className='text-12'
													style={{ color: '#DA1E28' }}
												>
													Invalid date
												</Typography>
											) : null
										}
									>
										{months.map((month) => (
											<MenuItem key={month} value={month}>
												{month}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								{/**
								 * Year
								 */}
								<Grid
									item
									xs={6}
									md={4}
									className='pl-2'
									sx={{ paddingBottom: '16px' }}
								>
									<TextField
										select
										id='outlined-form-filter'
										variant='outlined'
										color='primary'
										sx={classes.roundInput}
										onFocus={() => setFront(true)}
										size='small'
										label='Year'
										autoComplete='off'
										value={selectedYear}
										onChange={(e) => setSelectedYear(e.target.value)}
										SelectProps={{
											MenuProps: {
												getcontentanchorel: null,
												style: { maxHeight: '250px' },
											},
										}}
										error={yearError}
									>
										{years.map((year) => (
											<MenuItem key={year} value={year}>
												{year}
											</MenuItem>
										))}
									</TextField>
								</Grid>
								{/** CSC/CVV */}
								<Grid
									item
									xs={12}
									md={4}
									className='lg:pl-10'
									sx={{ paddingBottom: '16px' }}
								>
									<TextField
										id='outlined-form-filter'
										variant='outlined'
										color='primary'
										sx={classes.roundInput}
										size='small'
										placeholder='CSC/CVV'
										error={cvvError}
										value={cvv}
										onFocus={() => setFront(false)}
										onChange={onChangeCvv}
										helperText={
											cvvError ? (
												<Typography
													className='text-12'
													style={{ color: '#DA1E28' }}
												>
													3 Digits only.
												</Typography>
											) : null
										}
										autoComplete='off'
									/>
								</Grid>
							</Grid>
							{/**
							 * Billing address
							 */}
							<Grid item xs={12} sx={{ paddingBottom: '16px' }}>
								<Typography className='font-medium text-color py-2'>
									Billing Address
								</Typography>
								<div className='flex items-center pb-2'>
									<Radio
										onClick={() =>
											setBillingAddress(
												'45 Thunder Bird Trail, Brampton, ON. L64 7T1'
											)
										}
										checked={
											billingAddress ===
											'45 Thunder Bird Trail, Brampton, ON. L64 7T1'
										}
										sx={classes.radio}
									/>
									<Typography
										className='long-text pl-2 cursor-pointer'
										onClick={() =>
											setBillingAddress(
												'45 Thunder Bird Trail, Brampton, ON. L64 7T1'
											)
										}
									>
										45 Thunder Bird Trail, Brampton, ON. L64 7T1
									</Typography>
								</div>
								<div className='flex items-center pb-2'>
									<Radio
										onClick={() => setBillingAddress('Use Different Address')}
										checked={billingAddress === 'Use Different Address'}
										sx={classes.radio}
									/>
									<Typography
										className='long-text pl-2 cursor-pointer'
										onClick={() => setBillingAddress('Use Different Address')}
									>
										Use Different Address
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='pr-2'>
								<Button
									size='small'
									variant='outlined'
									sx={classes.backBtn}
									className='w-full'
								>
									Back
								</Button>
							</Grid>
							<Grid item xs={12} md={6} className='pl-2'>
								<Button
									size='small'
									disabled={
										nameOnCard.length === 0 ||
										nameError ||
										cardNumber.length === 0 ||
										cardError ||
										selectedMonth.length === 0 ||
										monthError ||
										selectedYear.length === 0 ||
										yearError ||
										cvv.length !== 3 ||
										billingAddress.length === 0
									}
									variant='contained'
									sx={classes.continueBtn}
									className='w-full'
								>
									Continue
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};
