import React, { useState, useEffect } from 'react';
import moment from 'moment';
// Components
import { VisaLogo } from '../SVGs/VisaLogo';
import { MasterCardLogo } from '../SVGs/MasterCardLogo';
// Material UI
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
// Tools
import useWindowDimension from '../hooks/useWindowDimension';

export const Payment = () => {
	const classes = {
		container: {
			background: 'white',
			borderRadius: '10px',
			boxShadow: '0px 4px 30px rgba(0,0,0,0.08)',
		},
		continueBtn: {
			textTransform: 'none',
			// width: '145px',
			height: '46px',
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
			// width: '145px',
			height: '46px',
			color: '#127C95',
			borderColor: '#127C95',
			'&:hover': {
				borderColor: '#3C727E',
				color: '#3C727E',
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
		textField: {
			width: '100%',
			'& label.Mui-focused': {
				color: '#4D5C6F',
			},
			'& 	.Mui-error': {
				borderColor: 'red !important',
			},
			'& .MuiOutlinedInput-root': {
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
		checkbox: {
			color: '#A5B6CD',
			'&:hover': {
				color: '#127C95',
			},
			'&.Mui-checked': {
				color: '#127C95',
			},
		},
		mobileBtnContainer: {
			position: 'fixed',
			bottom: 0,
			left: 0,
			padding: '0 1rem',
			background: 'white',
			paddingTop: '1rem',
			boxShadow: '0px 4px 20px 4px rgb(0 0 0 / 15%)',
			zIndex: '10',
		},
	};
	const { width } = useWindowDimension();
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
	const [check, setCheck] = useState(false);
	// validation
	const [nameError, setNameError] = useState(false);
	const [cardError, setCardError] = useState(false);
	const [cvvError, setCvvError] = useState(false);
	const [yearError, setYearError] = useState(false);
	const [monthError, setMonthError] = useState(false);
	// control
	const [activeCard, setActiveCard] = useState('');

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
		<div className='p-4 md:p-10 relative'>
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				sx={classes.container}
				className='mb-120 md:mb-0'
			>
				<Grid item xs={12} className='p-30'>
					<Typography className='text-16 font-medium text-color text-center md:text-left'>
						Credit Card
					</Typography>
				</Grid>
				<Grid item xs={12} className='px-4 md:px-8'>
					<FormControlLabel
						value={check}
						onChange={(e) => setCheck(e.target.checked)}
						control={<Checkbox required sx={classes.checkbox} />}
						label={
							<Typography className='font-medium text-color'>
								I agree to Kitco’s cancellation policy.
							</Typography>
						}
					/>
				</Grid>
				<Grid item xs={12} className='px-30 pb-30'>
					<Typography className='text-color-secondary'>
						To keep your account safe and secure,{' '}
						<b>we do not accept third-party payments.</b> Please ensure that{' '}
						<b>
							the name on the payment account (bank account, credit card or
							PayPal) matches that of the Kitco account holder,
						</b>{' '}
						or we'll have to return the payment.
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					className='p-30 py-20'
					sx={{ background: '#FAFAFC' }}
				>
					<Typography className='text-color text-16 mb-4'>
						Kitco only accepts Master and Visa
					</Typography>
					<div className='flex items-center'>
						<VisaLogo active={activeCard === 'visa'} className='mr-2' />
						<MasterCardLogo active={activeCard === 'master'} />
					</div>
				</Grid>
				{/**
				 * Name
				 */}
				<Grid
					item
					xs={12}
					className='pt-30 px-30'
					sx={{ paddingBottom: '16px' }}
				>
					<TextField
						id='name'
						className='w-full'
						value={nameOnCard}
						onChange={onChangeName}
						required
						label='Name on Card'
						sx={classes.textField}
						error={nameError}
						helperText={
							nameError ? (
								<Typography className='text-12' style={{ color: '#DA1E28' }}>
									Not empty, no symbols or spaces around the name are allowed
								</Typography>
							) : null
						}
						autoComplete='off'
					/>
				</Grid>
				{/**
				 * Card number
				 */}
				<Grid item xs={12} className='px-30' sx={{ paddingBottom: '16px' }}>
					<TextField
						required
						value={cardNumber}
						onChange={onChangeCard}
						label='Card Number'
						sx={classes.textField}
						error={cardError}
						helperText={
							cardError ? (
								<Typography className='text-12' style={{ color: '#DA1E28' }}>
									Only Visa/MasterCard allowed. 16 Digits.
								</Typography>
							) : null
						}
						autoComplete='off'
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
					justify='center'
					className='px-30'
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
							className='w-full'
							id='Month'
							select
							label='Month'
							required
							value={selectedMonth}
							onChange={(e) => setSelectedMonth(e.target.value)}
							sx={classes.textField}
							SelectProps={{
								MenuProps: {
									getcontentanchorel: null,
									style: { maxHeight: '250px' },
								},
							}}
							error={monthError}
							helperText={
								monthError ? (
									<Typography className='text-12' style={{ color: '#DA1E28' }}>
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
							required
							className='w-full'
							id='year'
							select
							label='Year'
							value={selectedYear}
							onChange={(e) => setSelectedYear(e.target.value)}
							sx={classes.textField}
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
							className='w-full'
							required
							label='CSC/CVV'
							sx={classes.textField}
							error={cvvError}
							value={cvv}
							onChange={onChangeCvv}
							helperText={
								cvvError ? (
									<Typography className='text-12' style={{ color: '#DA1E28' }}>
										3 Digits only.
									</Typography>
								) : null
							}
							autoComplete='off'
						/>
					</Grid>
				</Grid>

				<Grid item xs={12} className='px-30' sx={{ paddingBottom: '16px' }}>
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
			</Grid>
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='center'
				style={width > 900 ? null : classes.mobileBtnContainer}
				className='md:p-30 md:pt-10'
			>
				<Grid item xs={12} md={4} className='pb-2 lg:pb-0 lg:pr-2'>
					<Button variant='outlined' sx={classes.backBtn} className='w-full'>
						Back
					</Button>
				</Grid>
				<Grid item xs={12} md={4} className='pb-2 lg:pb-0 lg:pl-2'>
					<Button
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
							billingAddress.length === 0 ||
							!check
						}
						variant='contained'
						sx={classes.continueBtn}
						className='w-full'
					>
						Continue
					</Button>
				</Grid>
			</Grid>
		</div>
	);
};
