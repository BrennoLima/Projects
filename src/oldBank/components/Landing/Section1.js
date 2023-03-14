import React, { useEffect } from 'react';
// Components
import { Logo } from '../../../components/SVGs/old-bank-cafe/Logo';
import background from './OldBankLanding.jpg';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Section1 = () => {
	const { width } = useWindowDimensions();
	const classes = {
		imageBackground: {
			backgroundImage: `url(${background})`,
			backgroundPosition: 'center',
		},
		container: {
			height: '100vh',
			width: '100vw',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			zIndex: 5,
			color: '#fff6ec',
		},

		title: {
			fontFamily: 'Gentium Book Plus',
			fontSize: width > 768 ? '2rem' : '1.5rem',
			fontWeight: 'bold',
			color: '#FFF',
		},
		subtitle: {
			fontSize: width > 768 ? '1.4rem' : '1rem',
			fontWeight: 'normal',
			fontFamily: 'Gentium Book Plus',
			color: '#FFF',
		},
		textContainer: {
			background: 'rgb(0 0 0 / 40%)',
			borderRadius: '0.5rem',
			backdropFilter: 'blur(5px)',
		},
	};
	useEffect(() => {
		gsap.to('#text-container', { opacity: 1, duration: 1 });
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'linear' } });
		tl.to('#old-bank-navbar', {
			background: '#fffbeb',
			boxShadow: '1px 2px 5px rgba(0,0,0,0.15)',
		}).to('.navBtn', {
			color: '#492306',
			border: width > 768 ? '1px solid #492306' : null,
		});
		ScrollTrigger.create({
			animation: tl,
			trigger: '#section-1',
			start: 'bottom-=200',
			end: 'bottom',
			scrub: 1,
		});

		// eslint-disable-next-line
	}, []);
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='center'
			sx={classes.imageBackground}
		>
			<Grid item xs={12} sx={classes.container} id='section-1'>
				<Container>
					<Grid
						container
						direction='row'
						alignItems='stretch'
						justifyContent='center'
						sx={classes.textContainer}
						id='text-container'
					>
						<Grid
							item
							xs={12}
							md={6}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								maxHeight: width > 768 ? '40vh' : '30vh',
							}}
							className='p-8'
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
							className='p-4'
						>
							<div className='w-full'>
								<Typography sx={classes.subtitle} style={{ color: '#FFF' }}>
									Come experience our warm and welcoming atmosphere, where great
									conversations and highest quality coffee meet. Perfect for
									catching up with friends, lunch dates, studying, or simply
									relaxing with a good book. Join us today at the Old Bank Cafe!
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Grid>
		</Grid>
	);
};
