import React, { useEffect } from 'react';
// Components
import { Logo } from '../../components/SVGs/old-bank-cafe/Logo';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Section1 = () => {
	const classes = {
		container: {
			height: '100vh',
			width: '100vw',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 5,
			color: '#fff6ec',
			background: '#00000080',
		},
		image: {
			height: '100vh',
			overflow: 'hidden',
			position: 'fixed',
			top: 0,
		},
		title: {
			fontFamily: 'Gentium Book Plus',
			fontSize: '2.5rem',
			fontWeight: 'bold',
			opacity: 0.9,
		},
		subtitle: {
			fontSize: '1.2rem',
			fontWeight: 'normal',
			opacity: 0.8,
			fontFamily: 'Gentium Book Plus',
			color: '#4a4637',
		},
		textContainer: {
			background: 'rgb(0 0 0 / 5%)',
			borderRadius: '0.5rem',
			backdropFilter: 'blur(10px)',
		},
	};
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#section-1',
				start: 'bottom-=200',
				end: 'bottom',
				scrub: true,
			},
		});
		tl.to('#old-bank-navbar', {
			background: '#fffbeb',
			boxShadow: '1px 2px 5px rgba(0,0,0,0.15)',
		}).to('.navBtn', {
			color: '#6e6955',
			border: '1px solid #6e6955',
		});
	}, []);

	return (
		<Grid container direction='row' alignItems='center' justify='center'>
			<Grid item xs={12} sx={classes.image}>
				<img
					src='assets/Images/old-bank-cafe/OldBankLanding.jpg'
					alt='old-bank'
					style={{ filter: 'sepia(1)' }}
				/>
			</Grid>
			<Grid item xs={12} sx={classes.container} id='section-1'>
				<Container>
					<Grid
						container
						direction='row'
						alignItems='stretch'
						justifyContent='center'
						sx={classes.textContainer}
					>
						<Grid
							item
							xs={12}
							md={6}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							className='p-16'
						>
							<Logo />
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div className='w-full'>
								<Typography sx={classes.title}>
									Welcome to Old Bank Cafe!
								</Typography>
								<Typography sx={classes.subtitle} style={{ color: '#e9e1d7' }}>
									A welcoming atmosphere where loved ones can gather,
									conversation can bloom, and the coffee is of the highest
									quality! The perfect place to connect with old friends, or to
									meet new ones! So come on out to chill & chat, meet a friend
									for lunch, study with a classmate, or catch up on some
									reading, we can't wait to serve you!
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Grid>
		</Grid>
	);
};
