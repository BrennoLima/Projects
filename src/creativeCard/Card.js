import React, { useEffect, useState } from 'react';
// Components
import { CardConnect } from '../components/SVGs/CardConnect';
import { CardChip } from '../components/SVGs/CardChip';
import { CardIcon } from '../components/SVGs/CardIcon';
import { VisaBigLogo } from '../components/SVGs/VisaBigLogo';
import { MasterBigLogo } from '../components/SVGs/MasterBigLogo';
// Material UI
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
// gsap
import gsap from 'gsap';

export const Card = ({
	type,
	selectedMonth,
	selectedYear,
	cardNumber,
	nameOnCard,
	cvv,
	front,
}) => {
	const classes = {
		cardContainer: {
			background:
				type === 'visa'
					? 'linear-gradient(150deg, #121637, #1B4582)'
					: type === 'master'
					? '#FCFCFC'
					: 'linear-gradient(150deg, #C5333B, #A43138)',
			borderRadius: '1rem',
			boxShadow: '1px 2px 10px rgba(0,0,0,0.2)',
			// width: '350px',
			// height: '220px',
			// 1.590909090909091
			width: '477px',
			height: '300px',
			zIndex: 10,
		},
		cardTitle: {
			display: 'inline',
			fontSize: '20px',
			color: type === 'master' ? 'black' : 'white',
			fontWeight: '500',
		},
		roundedPlaceholder: {
			background: 'white',
			borderRadius: '0.5rem',
			border: '1px solid #DDD',
		},
		roundedPlaceholderText: {
			display: 'inline',
			fontSize: '12px',
			color: '#212121',
			fontWeight: '400',
		},
		mtAuto: {
			marginTop: 'auto',
		},
		blackStripe: {
			width: '100%',
			height: '50px',
			background: 'black',
			marginTop: '10%',
		},
		signatureContainer: {
			width: '100%',
			borderRadius: '0.5rem',
			height: '50px',
			background: '#DDD',
			zIndex: 10,
		},
		signatureWriting: {
			fontWeight: 600,
			color: 'white',
		},
		flippedContainer: {
			transform: 'rotateY(180deg)',
		},
		roundedPlaceholderCVV: {
			background: 'white',
			borderRadius: '0.5rem',
			height: '30px',
			width: '55px',
			border: '1px solid #DDD',
		},
	};
	const [isFlipped, setIsFlipped] = useState(false);
	// eslint-disable-next-line
	const flipCard = () => {
		if (!isFlipped) {
			gsap.to('#card', {
				transformStyle: 'preserve-3d',
				rotationY: 180,
				zIndex: 10,
				duration: 1,
			});
			setIsFlipped(true);
		} else {
			gsap.to('#card', {
				transformStyle: 'preserve-3d',
				rotationY: 0,
				zIndex: 10,
				duration: 1,
			});
			setIsFlipped(false);
		}
	};
	useEffect(() => {
		if (front !== null) {
			if (front) {
				gsap.to('#card', {
					transformStyle: 'preserve-3d',
					rotationY: 0,
					zIndex: 10,
					duration: 1,
				});
				setIsFlipped(false);
			} else {
				gsap.to('#card', {
					transformStyle: 'preserve-3d',
					rotationY: 180,
					zIndex: 10,
					duration: 1,
				});
				setIsFlipped(true);
			}
		}
	}, [front]);
	useEffect(() => {
		gsap.fromTo(
			'#card',
			{ y: 0 },
			{ y: -10, duration: 2, repeat: -1, yoyo: true }
		);
	}, []);

	return (
		<>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justifyContent='flex-start'
				sx={classes.cardContainer}
				id='card'
			>
				{isFlipped ? (
					<Grid
						item
						xs={12}
						container
						direction='row'
						alignItems='stretch'
						justifyContent='flex-start'
						sx={classes.flippedContainer}
					>
						<Grid item xs={12} sx={classes.blackStripe} />
						<Grid item xs={5} sx={{ paddingLeft: '1.6rem', zIndex: 2 }}>
							<div>
								<Typography sx={classes.signatureWriting}>SIGNATURE</Typography>
								<div style={classes.signatureContainer} />
							</div>
						</Grid>
						<Grid
							item
							xs={7}
							sx={{
								paddingRight: '1.6rem',
								paddingTop: '35px',
								marginLeft: '-10px',
							}}
						>
							<div className='px-2' style={classes.roundedPlaceholderCVV}>
								<Typography
									sx={{
										...classes.roundedPlaceholderText,
										paddingLeft: '10px',
									}}
								>
									{cvv ? cvv : 'CVV'}
								</Typography>
							</div>
						</Grid>
					</Grid>
				) : (
					<Grid
						item
						xs={12}
						container
						direction='row'
						alignItems='stretch'
						justifyContent='flex-start'
						sx={{ padding: '1rem 1.6rem' }}
					>
						<Grid item xs={12} className='flex items-center justify-between'>
							<Typography sx={classes.cardTitle}>Card</Typography>
							<CardConnect color={type === 'visa' ? '#FFF' : null} />
						</Grid>
						<Grid item xs={12} className='flex items-center'>
							<CardChip />
						</Grid>
						<Grid
							item
							xs={9}
							container
							direction='row'
							alignItems='center'
							justifyContent='center'
							sx={classes.mtAuto}
						>
							<Grid item xs={12}>
								<div className='px-2' style={classes.roundedPlaceholder}>
									<Typography sx={classes.roundedPlaceholderText}>
										{cardNumber !== '' ? cardNumber : 'Card number'}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} className='pb-2'>
								<Typography
									sx={classes.roundedPlaceholderText}
									style={{ color: type === 'visa' ? '#FFF' : '#000' }}
								>
									VALID THRU
								</Typography>
								<div className='px-2' style={classes.roundedPlaceholder}>
									<Typography sx={classes.roundedPlaceholderText}>
										{selectedMonth !== '' ? selectedMonth : 'MM'}/
										{selectedYear !== '' ? selectedYear : 'YY'}
									</Typography>
								</div>
							</Grid>
							<Grid item xs={12} className='pb-2'>
								<div className='px-2' style={classes.roundedPlaceholder}>
									<Typography sx={classes.roundedPlaceholderText}>
										{nameOnCard !== '' ? nameOnCard : 'Name on the card'}
									</Typography>
								</div>
							</Grid>
						</Grid>
						<Grid item xs={3} className='flex items-end justify-end'>
							{type === 'visa' ? (
								<VisaBigLogo />
							) : type === 'master' ? (
								<MasterBigLogo />
							) : (
								<CardIcon />
							)}
						</Grid>
					</Grid>
				)}
			</Grid>
		</>
	);
};
