import React, { useEffect } from 'react';
import uuid from 'uuid';
// Components
import { SlideItem } from './SlideItem';
//Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';
// Slider
import Slider from 'react-slick';
/////
// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Section3 = () => {
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
			fontSize: width > 768 ? '1.2rem' : '1rem',
			fontFamily: 'Gentium Book Plus',
			color: '#68492f',
			opacity: '0.8',
		},
	};
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		autoplaySpeed: 10000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
	};
	const slides = [
		{
			imgSrc: 'assets/Images/old-bank-cafe/image10.jpg',
			title: 'Always fresh',
			description:
				'Our commitment to freshness means only the best ingredients are used. With vegan and gluten-free options available, come taste the local Quinte West flavor.',
			button: { icon: 'fas fa-utensils', text: 'Menu', link: '/menu' },
		},
		{
			imgSrc: 'assets/Images/old-bank-cafe/image8.jpg',
			title: 'Pation season',
			description:
				'Savor the summer with a perfect cup of coffee on our open riverside patio. The perfect spot to relax and unwind. Visit us today!',
			button: { icon: 'fas fa-bacon', text: 'Breakfast', link: '/menu' },
		},
		{
			imgSrc: 'assets/Images/old-bank-cafe/image12.jpg',
			title: 'Bring it home',
			description:
				'Experience the highest quality coffee beans in the comfort of your own home with our wide selection of premium beans. Elevate your morning routine today!',
			button: { icon: 'fas fa-seedling', text: 'Beans', link: '/menu' },
		},
	];
	useEffect(() => {
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'linear' } });

		tl.fromTo(
			'.titleFade2',
			{
				opacity: 0.3,
				x: -100,
			},
			{ opacity: 1, y: 0, x: 0 }
		)
			.fromTo(
				'.fadeLeft2',
				{
					opacity: 0.3,
					y: 100,
					x: -100,
				},
				{ opacity: 1, y: 0, x: 0 },
				'-=0.5'
			)
			.fromTo(
				'.fadeRight2',
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
			trigger: '#section-2',
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
				background: '#fffbeb',
				zIndex: 2,
			}}
			className='py-8 md:py-16'
			id='section-3'
		>
			<Grid item xs={12} className='p-4 md:pb-16 titleFade'>
				<Typography align='center' sx={classes.subheader}>
					The greatest selection of food and drinks
				</Typography>
				<Typography sx={classes.subheader2} className='pt-2' align='center'>
					from breakfast to lunch and everything in between!
				</Typography>
			</Grid>
			<Container sx={{ padding: 0 }}>
				<Slider {...settings}>
					{slides.map((slide) => (
						<div key={uuid()}>
							<SlideItem slide={slide} />
						</div>
					))}
				</Slider>
			</Container>
		</Grid>
	);
};
