import React, { useState } from 'react';
// Components
import { OldBankNavBar } from '../OldBankNavBar';
import { MenuItem } from './MenuItem';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';
import { Section5 } from '../Landing/Section5';

export const Menu = () => {
	const { width } = useWindowDimensions();
	const classes = {
		subtitle: {
			fontSize: '1.4rem',
			fontWeight: 'bold',
			opacity: 0.8,
			fontFamily: 'Gentium Book Plus',
			color: '#68492f',
		},
		title2: {
			letterSpacing: '1px',
			fontWeight: 600,
			fontSize: width > 768 ? '2rem' : '1.4rem',
			color: '#492306',
			fontFamily: 'Gentium Book Plus',
		},
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

	const [beverages] = useState([
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
	]);

	const [food] = useState([
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
	]);
	const [beans] = useState([
		{
			title: '1 lb bags',
			image: '/assets/Images/old-bank-cafe/beans.jpg',
			category: 'beans',
		},
		{
			title: '1/2 lbs bags',
			image: '/assets/Images/old-bank-cafe/beans.jpg',
			category: 'beans',
		},
	]);
	const [more] = useState([
		{
			title: 'Online order',
			image: '/assets/Images/old-bank-cafe/online-order.jpg',
			category: 'beans',
		},
		{
			title: 'Catering',
			image: '/assets/Images/old-bank-cafe/catering.jpg',
			category: 'beans',
		},
	]);

	return (
		<Grid
			item
			xs={12}
			style={{
				zIndex: 2,
				background: '#fffbeb',
				minHeight: 'calc(100vh - 50px)',
			}}
		>
			{/**
			 * Navbar
			 */}
			<OldBankNavBar color={true} />
			{/**
			 * Content
			 */}
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
					className='p-4'
				>
					<Grid item xs={12} className='p-4 pt-8 md:pb-8'>
						<Typography className='' align='center' sx={classes.subheader}>
							Menu
						</Typography>
						<Typography sx={classes.subheader2} className='pt-2' align='center'>
							Browse and discover the perfect dish for your craving!
						</Typography>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: '1rem' }}>
						<Button
							size='small'
							startIcon={
								<span key='back'>
									<i className='fas fa-arrow-left' />
								</span>
							}
							sx={{ textTransform: 'none' }}
							onClick={() => (window.location.href = '/old-bank')}
						>
							Home
						</Button>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: '2rem' }}>
						<Typography sx={classes.subtitle} className='pt-2'>
							Beverages
						</Typography>
						<Divider sx={{ marginBottom: '16px' }} />
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='flex-start'
						>
							{beverages.map((item) => (
								<Grid item xs={12} md={3} key={item.title} className='py-2'>
									<MenuItem item={item} />
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: '2rem' }}>
						<Typography sx={classes.subtitle} className='pt-2'>
							Food
						</Typography>
						<Divider sx={{ marginBottom: '16px' }} />
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='flex-start'
						>
							{food.map((item) => (
								<Grid item xs={12} md={3} key={item.title} className='py-2'>
									<MenuItem item={item} />
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: '2rem' }}>
						<Typography sx={classes.subtitle} className='pt-2'>
							Beans
						</Typography>
						<Divider sx={{ marginBottom: '16px' }} />
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='flex-start'
						>
							{beans.map((item) => (
								<Grid item xs={12} md={3} key={item.title} className='py-2'>
									<MenuItem item={item} />
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: '2rem' }}>
						<Typography sx={classes.subtitle} className='pt-2'>
							More
						</Typography>
						<Divider sx={{ marginBottom: '16px' }} />
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='flex-start'
						>
							{more.map((item) => (
								<Grid item xs={12} md={3} key={item.title} className='py-2'>
									<MenuItem item={item} />
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			{/**
			 * Footer
			 */}
			<Section5 />
		</Grid>
	);
};
