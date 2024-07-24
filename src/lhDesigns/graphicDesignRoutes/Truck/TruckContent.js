import React from 'react';
import { Grid, Stack } from '@mui/material';
import { useTheme } from '@emotion/react';
import {
	useMediaQuery,
	Link,
	Breadcrumbs,
	Typography,
	Box,
} from '@mui/material';

export const TruckContent = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid container direction='row' sx={{ px: 4, py: 2 }}>
			<Grid item xs={12} sx={{ py: 2 }}>
				<Typography variant='h2' fontWeight='bold'>
					TAK-YO
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography color='text.secondary'>
						A TAKOYAKI INSPIRED FOOD TRUCK
						<mark style={{ background: 'none', padding: '8px' }}>•</mark>
						BOLD - RETRO - FUN
					</Typography>
				</Box>
			</Grid>
			<Breadcrumbs aria-label='breadcrumb' sx={{ pb: 4 }}>
				<Link underline='hover' color='inherit' href='/luhoca-designs'>
					Graphic Design
				</Link>
				<Typography fontWeight='bold' color='primary'>
					TAK-YO
				</Typography>
			</Breadcrumbs>
			<Grid
				item
				xs={12}
				container
				direction='row'
				alignItems='stretch'
				justifyContent='center'
				sx={{ mb: 4 }}
			>
				<Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
					<Stack gap={6}>
						<Box
							sx={{
								borderLeft: '4px solid',
								borderColor: '#ff632c',
								p: 2,
							}}
						>
							<Typography variant='h6' fontWeight='bold'>
								BRAND SUMMARY
							</Typography>
							<Typography>
								The food truck is inspired by a japanese street food named
								Takoyaki and a play on a Czech word "tak jo". Serving takoyaki
								and an extended menu offering ball shaped treats. Thus creating
								TAK-YO!
							</Typography>
						</Box>
						<Box>
							<Typography
								variant='h6'
								fontWeight='bold'
								sx={{ mb: 2, borderBottom: '1px solid #DDD' }}
							>
								TYPOGRAPHY
							</Typography>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									pb: 2,
								}}
							>
								<Typography sx={{ mr: '25%' }}>Headline</Typography>
								<Typography>Body Text</Typography>
							</Box>
							<img
								src='/assets/SVGs/LHDesigns/foodtruck-typography.svg'
								alt='foodtruck-typography'
								style={{ height: 'auto', maxHeight: '125px' }}
							/>
						</Box>
						<Box>
							<Typography
								variant='h6'
								fontWeight='bold'
								sx={{ mb: 2, borderBottom: '1px solid #DDD' }}
							>
								COLOUR PALETTE
							</Typography>
							<img
								src='/assets/SVGs/LHDesigns/foodtruck-palette.svg'
								alt='foodtruck-palette'
								style={{ height: 'auto', maxHeight: '120px' }}
							/>
						</Box>
					</Stack>
				</Grid>
				<Grid
					item
					xs={12}
					md={7}
					order={{ xs: 1, md: 2 }}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<img
						src='/assets/SVGs/LHDesigns/foodtruck.svg'
						alt='foodtruck'
						style={{
							width: isSmallScreen ? '100%' : '60%',
							paddingBottom: isSmallScreen && '16px',
							height: 'auto',
							objectFit: 'contain',
						}}
					/>
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					mb: 4,
				}}
			>
				<Typography
					variant='h6'
					fontWeight='bold'
					sx={{ mb: 2, borderBottom: '1px solid #DDD' }}
				>
					THEME & LOGO
				</Typography>
				<Typography sx={{ mb: 4 }}>
					Since foodtrucs are often accompanied by other foodstrucks
					(competitors), the logo has been designed to be behind a red luring
					background. This create a big contrast, and represents an "explosion"
					of flavor. Red and yellow to provoke appetite. Round and bold letters
					to mimic the shape of the product.
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/assets/SVGs/LHDesigns/foodtruck-themelogo.svg'
						alt='foodtruck theme and logo'
						style={{ width: isSmallScreen ? '100%' : '40%', height: 'auto' }}
					/>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					mb: 4,
				}}
			>
				<Typography
					variant='h6'
					fontWeight='bold'
					sx={{ mb: 2, borderBottom: '1px solid #DDD' }}
				>
					MASCOTS
				</Typography>
				<Typography sx={{ mb: 4 }}>
					Food trucks are often parked at venues/gatherings where people are
					there for an experience and/or create memories. Mascots aid in the
					food truck's identity, and help sell consumers a "fun experience".
					Expressing the joy and building a sense of community in return.
				</Typography>
				<Box>
					<img
						src='/assets/SVGs/LHDesigns/foodtruck-mascots.svg'
						alt='foodtruck-logo'
						style={{
							width: isSmallScreen ? '100%' : '50%',
							height: 'auto',
							margin: 'auto',
							marginBottom: isSmallScreen && '16px',
						}}
					/>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					mb: 4,
				}}
			>
				<Typography
					variant='h6'
					fontWeight='bold'
					sx={{ mb: 2, borderBottom: '1px solid #DDD' }}
				>
					MENU BOARD
				</Typography>
				<Box
					sx={{
						display: ['block', 'flex'],
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<img
						src='/assets/SVGs/LHDesigns/foodtruck-menu-1.svg'
						alt='foodtruck-menu-1'
						style={{
							width: isSmallScreen ? '75%' : '35%',
							height: 'auto',
							margin: 'auto',
							marginBottom: isSmallScreen && '16px',
						}}
					/>
					<img
						src='/assets/SVGs/LHDesigns/foodtruck-menu-2.svg'
						alt='foodtruck-menu-2'
						style={{
							width: isSmallScreen ? '65%' : '35%',
							height: 'auto',
							margin: 'auto',
						}}
					/>
				</Box>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					mb: 4,
				}}
			>
				<Typography
					variant='h5'
					fontWeight='bold'
					sx={{ mb: 2, borderBottom: '1px solid #DDD' }}
				>
					LAYOUT
				</Typography>
				<Box
					sx={{
						width: 1,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/assets/Images/LHDesigns/foodtruck-layout.png'
						alt='foodtruck-layout'
						style={{ width: '100%', height: 'auto' }}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
