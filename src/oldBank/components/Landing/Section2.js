import React, { useEffect } from 'react';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Section2 = () => {
	const { width } = useWindowDimensions();
	const classes = {
		subtitle: {
			fontSize: '1.2rem',
			fontWeight: 'normal',
			opacity: 0.8,
			fontFamily: 'Gentium Book Plus',
			color: '#4a4637',
		},
		title2: {
			letterSpacing: '1px',
			fontWeight: 600,
			fontSize: width > 768 ? '2rem' : '1.4rem',
			color: '#6e6955',
			fontFamily: 'Gentium Book Plus',
		},
		subheader: {
			letterSpacing: '4px',
			fontWeight: 600,
			fontSize: width > 768 ? '2rem' : '1.4rem',
			color: '#6e6955',
			fontFamily: 'Gentium Book Plus',
		},
		subheader2: {
			fontSize: width > 768 ? '1.2rem' : '1rem',
			fontFamily: 'Gentium Book Plus',
			color: '#4a4637',
			opacity: '0.8',
		},
		actionBtn: {
			textTransform: 'none',
			color: '#836801',
			borderRadius: '0.3rem',
			padding: '0.5rem 2rem',
			transition: 'all 0.5s ease',
			border: '1px solid #836801',
			'&:hover': {
				background: '#0000000d',
				color: '#836801',
				boxShadow: '1px 2px 2px rgba(0,0,0,0.1)',
			},
		},
	};
	useEffect(() => {
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'linear' } });
		tl.fromTo(
			'.titleFade',
			{
				opacity: 0.3,
				x: -100,
			},
			{ opacity: 1, y: 0, x: 0 }
		)
			.fromTo(
				'.fadeLeft',
				{
					opacity: 0.3,
					y: 100,
					x: -100,
				},
				{ opacity: 1, y: 0, x: 0 },
				'-=0.5'
			)
			.fromTo(
				'.fadeRight',
				{
					opacity: 0.3,
					y: 100,
					x: 100,
				},
				{ opacity: 1, y: 0, x: 0 },
				'-=0.5'
			);
		ScrollTrigger.create({
			animation: tl,
			trigger: '#section-1',
			start: 'center',
			end: 'center+=100',
			scrub: 1,
			once: true,
		});
	}, []);

	return (
		<Grid
			item
			xs={12}
			style={{
				zIndex: 2,
				background: '#fffbeb',
			}}
			className='py-8 md:py-16'
			id='section-2'
		>
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
					className='md:p-4'
				>
					<Grid item xs={12} className='p-4 md:pb-16 titleFade'>
						<Typography className='' align='center' sx={classes.subheader}>
							Stay a while and enjoy a nice coffee{' '}
							<i className='fas fa-coffee' />
						</Typography>
						<Typography sx={classes.subheader2} className='pt-2' align='center'>
							Get a taste of the best grains of the world
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} className='fadeLeft'>
						<div
							className='w-full p-8 md:p-16 md:px-8 mr-0'
							style={{
								background: '#fff7d6',
								borderRadius: width > 768 ? '0.3rem' : null,
							}}
						>
							<Typography sx={classes.title2} className='pb-2'>
								Unique Experience
							</Typography>
							<Typography sx={classes.subtitle} className='py-4 pb-6'>
								Delicious food, comfy seats, a lovely riverside patio in the
								summer, free wifi! One unique feature we boast is the Old Bank
								Vault - refurbished into a comfortable space to host you and
								your friends for lunch or a cup o' joe!
							</Typography>
							<Button
								sx={classes.actionBtn}
								startIcon={<i className='fas fa-utensils' />}
							>
								Menu
							</Button>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{ marginLeft: width > 768 ? '-1rem' : null }}
						className='fadeRight'
					>
						<div
							className='video-container'
							style={{
								borderRadius: width > 768 ? '0.3rem' : null,
								boxShadow: '1px 2px 3px rgb(78 76 64 / 20%)',
							}}
						>
							<iframe
								src='https://www.youtube.com/embed/LNNCtSQKZ5Q?autoplay=1&cc_load_policy=1&mute=1'
								title='Old Bank Cafe'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
						</div>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};
