import React, { useEffect } from 'react';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// hooks
import useWindowDimensions from '../../components/hooks/useWindowDimension';
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Section5 = () => {
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
	};
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#section-4',
				start: 'top',
				end: 'top+=250',
				scrub: 1,
			},
		});

		tl.fromTo(
			'.fadeUp',
			{
				opacity: 0.3,
				x: -150,
			},
			{ opacity: 1, y: 0, x: 0 }
		);
	}, []);
	return (
		<Grid
			item
			xs={12}
			style={{
				zIndex: 2,
				background: '#fff7d6',
			}}
		>
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
					className='py-16 fadeUp'
				>
					<Grid item xs={12} className='pb-4'>
						<Typography className='' align='center' sx={classes.subheader}>
							Connect with us
						</Typography>
						<Typography sx={classes.subheader2} className='pt-4' align='center'>
							Stay updated on what we're up to, latest special, upcoming events,
							and more!
						</Typography>
					</Grid>
					<Grid item className='flex items-center justify-center px-10'>
						<Link
							href='https://www.instagram.com/oldbankcafefrankford/'
							className='font-semibold flex items-center'
							sx={{ color: '#6e6955', textDecoration: 'none' }}
							target='_blank'
						>
							<i
								className='fab fa-instagram mr-2'
								style={{ fontSize: '2rem' }}
							/>
							oldbankcafefrankford
						</Link>
					</Grid>
					<Grid item className='flex items-center justify-center px-10'>
						<Link
							href='https://www.facebook.com/oldbankcafee/'
							className='font-semibold flex items-center'
							sx={{ color: '#6e6955', textDecoration: 'none' }}
							target='_blank'
						>
							<i
								className='fab fa-facebook mr-2'
								style={{ fontSize: '2rem' }}
							/>
							oldbankcafefrankford
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};
