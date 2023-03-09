import React, { useEffect } from 'react';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';
/////
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GingerbreadMan } from '../Animation/GingerbreadMan';
gsap.registerPlugin(ScrollTrigger);

export const Section4 = () => {
	const { width } = useWindowDimensions();
	const classes = {
		subheader: {
			letterSpacing: '4px',
			fontWeight: 600,
			fontSize: width > 768 ? '2rem' : '1.4rem',
			color: '#492306',
			fontFamily: 'Gentium Book Plus',
		},
		subheader2: {
			fontSize: '1.2rem',
			fontFamily: 'Gentium Book Plus',
			color: '#68492f',
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
			'.gingertitle',
			{
				opacity: 0.3,
				y: -20,
			},
			{ opacity: 1, y: 0, x: 0 }
		);

		ScrollTrigger.create({
			animation: tl,
			trigger: '#section-3',
			start: 'center',
			end: 'center-=100',
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
				background: '#FFF7D6',
			}}
			className='py-8'
			id='gingerbread'
		>
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='center'
				>
					<Grid item xs={12} className='pb-10 gingertitle'>
						<Typography className='' align='center' sx={classes.subheader}>
							Cookies Decoration Class
						</Typography>
						<Typography sx={classes.subheader2} className='pt-2' align='center'>
							COMING SOON!
						</Typography>
					</Grid>
					<Grid item xs={12} className='flex items-center justify-center'>
						<GingerbreadMan />
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
};
