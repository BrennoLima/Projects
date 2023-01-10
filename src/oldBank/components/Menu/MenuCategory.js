import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Components
import { OldBankNavBar } from '../OldBankNavBar';
import { Item } from './Item';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// hooks
import useWindowDimensions from '../../../components/hooks/useWindowDimension';
import { Section5 } from '../Landing/Section5';
// background
import background from './coffee-background.jpg';

export const MenuCategory = ({ props }) => {
	const { width } = useWindowDimensions();
	const params = useParams();
	const classes = {
		imageBackground: {
			backgroundImage: `url(${background})`,
			backgroundPosition: 'center',
			minHeight: '45vh',
			backgroundSize: 'cover',
		},
		subtitle: {
			fontSize: '1.4rem',
			fontWeight: 'bold',
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
			fontWeight: 'bold',
			fontSize: width > 768 ? '2rem' : '1.4rem',
			fontFamily: 'Gentium Book Plus',
			color: 'white',
			background: 'rgb(0 0 0 / 20%)',
			padding: '0.5rem 5rem',
			borderRadius: '0.5rem',
			backdropFilter: 'blur(25px)',
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

	const [items, setItems] = useState(null);

	useEffect(() => {
		switch (params.category) {
			case 'coffees':
				setItems([
					{
						name: 'Latte',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/latte.jpg',
					},
					{
						name: 'Cappuccino',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/cappuccino.jpg',
					},
					{
						name: 'Americano',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/americano.jpg',
					},
					{
						name: 'Americano Maestro',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/americano-maestro.jpg',
					},
					{
						name: 'Macchiato',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/macchiato.jpg',
					},
					{
						name: 'Flat White',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Cortado',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/cortado.jpg',
					},
					{
						name: 'Canadiano (Red Eye)',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Cafe Au Lait',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Mocha Cafe',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Vienna Cafe',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'French Press',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Espresso',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Drip Coffee',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
					{
						name: 'Iced Coffee',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/coffee.png',
					},
				]);
				break;
			case 'teas':
				break;
			case 'iced-drinks':
				break;
			case 'frappuccinos':
				setItems([
					{
						name: 'White chocolate',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/white-chocolate-frappe.jpg',
					},
					{
						name: 'Red velvet',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/red-velvet-frappe.jpg',
					},
					{
						name: 'Pistachio',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/pistachio-frappe.jpg',
					},
					{
						name: 'Horchatta',
						price: 3.5,
						description:
							'A shot of espresso with steamed milk and a layer of foam on top.',
						image: '/assets/Images/old-bank-cafe/horchatta.jpg',
					},
				]);
				break;
			default:
				break;
		}
	}, [params.category]);

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
			<div
				className='flex items-center justify-center'
				style={classes.imageBackground}
			>
				<Typography className='' align='center' sx={classes.subheader}>
					{params.category.charAt(0).toUpperCase() +
						params.category.slice(1).replaceAll('-', ' ')}
				</Typography>
			</div>
			<Container sx={{ padding: 0 }}>
				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
					className='p-4'
				>
					<Grid item xs={12}>
						<Button
							size='small'
							startIcon={
								<span key='back'>
									<i className='fas fa-arrow-left' />
								</span>
							}
							sx={{ textTransform: 'none' }}
							onClick={() => window.history.back()}
						>
							Back
						</Button>
					</Grid>
					<Grid item xs={12} sx={{ marginBottom: '2rem' }}>
						<Typography sx={classes.subtitle} className='pt-2'>
							{params.category.charAt(0).toUpperCase() +
								params.category.slice(1).replaceAll('-', ' ')}
						</Typography>
						<Divider sx={{ marginBottom: '16px' }} />
						<Grid
							container
							direction='row'
							alignItems='center'
							justifyContent='flex-start'
						>
							{items &&
								items.map((item) => (
									<Grid item xs={12} md={3} key={item.name} className='pb-10'>
										<Item item={item} />
									</Grid>
								))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Section5 />
		</Grid>
	);
};
