import React, { useEffect } from 'react';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// hooks
import useWindowDimensions from '../../components/hooks/useWindowDimension';
/////
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Section4 = () => {
	const { width } = useWindowDimensions();
	const classes = {
		subheader: {
			letterSpacing: '4px',
			fontWeight: 600,
			fontSize: width > 768 ? '2rem' : '1.4rem',
			color: '#6e6955',
			fontFamily: 'Gentium Book Plus',
		},
		subheader2: {
			fontSize: '1.2rem',
			fontFamily: 'Gentium Book Plus',
			color: '#4a4637',
			opacity: '0.8',
		},
		award: {
			borderRadius: '0.5rem',
			boxShadow: 'rgb(78 76 64 / 20%) 1px 2px 3px',
		},
	};
	useEffect(() => {
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'linear' } });
		tl.fromTo(
			'.titleFade3',
			{
				opacity: 0.3,
				x: -100,
			},
			{ opacity: 1, y: 0, x: 0 }
		)
			.fromTo(
				'.fadeLeft3',
				{
					opacity: 0.3,
					y: 100,
					x: -100,
				},
				{ opacity: 1, y: 0, x: 0 },
				'-=0.5'
			)
			.fromTo(
				'.fadeRight3',
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
			trigger: '#section-3',
			start: 'center',
			end: 'center+=100',
			scrub: 1,
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
			className='py-16'
			id='section-4'
		>
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
					className='p-4'
				>
					<Grid item xs={12} className='pb-16 titleFade3'>
						<Typography className='' align='center' sx={classes.subheader}>
							Guru Award winner 2021 <i className='fas fa-award' />
						</Typography>
						<Typography sx={classes.subheader2} className='pt-2' align='center'>
							Best Interior and Recommended on Restaurant Guru!
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						className='flex items-center justify-center pb-2 md:pb-0 fadeLeft3'
					>
						<img
							src='assets/Images/old-bank-cafe/award1.png'
							alt='award1'
							style={classes.award}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						className='flex items-center justify-center pb-2 md:pb-0 fadeRight3'
					>
						<img
							src='assets/Images/old-bank-cafe/award2.png'
							alt='award1'
							style={classes.award}
						/>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};
