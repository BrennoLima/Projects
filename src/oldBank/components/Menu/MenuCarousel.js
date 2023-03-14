import React, { useState } from 'react';
// Components
import { MenuItem } from './MenuItem';
//Material UI
import Grid from '@mui/material/Grid';
// Slider
import Slider from 'react-slick';

export const MenuCarousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 20000,
		autoplaySpeed: 4000,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		cssEase: 'linear',
		pauseOnHover: true,
	};

	const [menuItems] = useState([
		{
			title: 'Breakfast',
			image: '/assets/Images/old-bank-cafe/breakfast-muffin.jpg',
			category: 'breakfast',
		},
		{
			title: 'Lunch',
			image: '/assets/Images/old-bank-cafe/lunch.jpg',
			category: 'lunch',
		},
		{
			title: 'Baked Goods',
			image: '/assets/Images/old-bank-cafe/baked.jpg',
			category: 'baked-goods',
		},
		{
			title: 'Bagels',
			image: '/assets/Images/old-bank-cafe/breakfast-bagel.jpg',
			category: 'bagels',
		},
		{
			title: 'Coffees',
			image: '/assets/Images/old-bank-cafe/coffee.jpg',
			category: 'coffees',
		},
		{
			title: 'Teas',
			image: '/assets/Images/old-bank-cafe/teas.jpg',
			category: 'teas',
		},
		{
			title: 'Iced drinks',
			image: '/assets/Images/old-bank-cafe/iced-drinks.jpg',
			category: 'iced drinks',
		},
		{
			title: 'Frappuccinos',
			image: '/assets/Images/old-bank-cafe/frappe.jpg',
			category: 'frappuccinos',
		},
		{
			title: '1 lb bags',
			image: '/assets/Images/old-bank-cafe/beans.jpg',
			category: 'beans',
		},
	]);

	return (
		<Grid
			item
			xs={12}
			style={{
				zIndex: 2,
				background: '#FFF7D6',
			}}
			className='py-4'
		>
			<Slider {...settings}>
				{menuItems.map((item) => (
					<div key={item.title} className='py-2'>
						<MenuItem item={item} label={false} />
					</div>
				))}
			</Slider>
		</Grid>
	);
};
