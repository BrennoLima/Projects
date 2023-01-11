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
			color: '#6e6955',
			fontFamily: 'Gentium Book Plus',
		},
		subheader2: {
			fontSize: width > 768 ? '1.2rem' : '1rem',
			fontFamily: 'Gentium Book Plus',
			color: '#4a4637',
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
				'By prioritizing only the freshest ingredients and offering plenty of vegan & gluten-free options, visitors will feel a true home-grown Quinte West experience as an Old Bank Cafe patron.',
			button: { icon: 'fas fa-utensils', text: 'Menu' },
		},
		{
			imgSrc: 'assets/Images/old-bank-cafe/image8.jpg',
			title: 'Pation season',
			description:
				'Enjoy the summer with great coffee. Our riverside patio is open and waiting for you!',
			button: { icon: 'fas fa-bacon', text: 'Breakfast' },
		},
		{
			imgSrc: 'assets/Images/old-bank-cafe/image12.jpg',
			title: 'Bring it home',
			description:
				'We have a wide selection of beans to choose from. The highest quality beans in the comfort of your house.',
			button: { icon: 'fas fa-seedling', text: 'Beans' },
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
					From breakfast to lunch
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
