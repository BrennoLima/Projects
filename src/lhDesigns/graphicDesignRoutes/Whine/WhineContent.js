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

export const WhineContent = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid container direction='row' sx={{ px: 4, py: 2 }}>
			<Grid item xs={12} sx={{ py: 2 }}>
				<Typography variant='h2' fontWeight='bold'>
					Whine
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography color='text.secondary'>
						A FUN NEW SPIN ON CRAFT WINE
						<mark style={{ background: 'none', padding: '8px' }}>•</mark>
						EXPRESSIVE - FUNKY - ORIGINAL
					</Typography>
				</Box>
			</Grid>
			<Breadcrumbs aria-label='breadcrumb' sx={{ pb: 4 }}>
				<Link underline='hover' color='inherit' href='/luhoca-designs'>
					Graphic Design
				</Link>
				<Typography fontWeight='bold' color='primary'>
					Whine
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
								borderColor: '#671579',
								p: 2,
							}}
						>
							<Typography variant='h6' fontWeight='bold'>
								BRAND SUMMARY
							</Typography>
							<Typography>
								A brand with a new spin on crafted wines. Unique flavor
								profiles, like never before. Giving off friendly, expressive and
								goofy vibes.
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
								src='/assets/SVGs/LHDesigns/whine-typography.svg'
								alt='whine-typography'
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
								src='/assets/SVGs/LHDesigns/whine-palette.svg'
								alt='whine-typography'
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
						src='/assets/SVGs/LHDesigns/whine-bottle.svg'
						alt='whine-bottle'
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
					LOGO
				</Typography>
				<Typography sx={{ mb: 4 }}>
					The logo has irregular baseline to show the feeling of drunkess in a
					playfull way. Bright secondary colours for fun and youthful look.
				</Typography>
				<Box
					sx={{
						background: '#151012',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/assets/SVGs/LHDesigns/whine-logo.svg'
						alt='whine-logo'
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
					SIGNAGE
				</Typography>
				<Typography sx={{ mb: 4 }}>
					Creating phrases using the brand's name as the punch line, emphasizes
					the concept of creating sound "whining", and further encouraging
					expression. Since wine drinking is often a social activity, the
					product is hinting that is it's purpose for the customer.
				</Typography>
				<Box>
					<img
						src='/assets/SVGs/LHDesigns/whine-signage.svg'
						alt='whine-signage'
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
					PACKAGE DESIGN
				</Typography>
				<Typography sx={{ mb: 4 }}>
					Colours emphasize the brand, and read apart as being 3 different
					flavor profiles. Simple but playful decals with non traditional type
					against a contrasting generic glass bottle, are sure to stand out in
					wine retails shelves.
				</Typography>
				<Box
					sx={{
						display: ['block', 'flex'],
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<img
						src='/assets/SVGs/LHDesigns/whine-dieline-front.svg'
						alt='whine-dieline-front'
						style={{
							width: isSmallScreen ? '75%' : '25%',
							height: 'auto',
							margin: 'auto',
							marginBottom: isSmallScreen && '16px',
						}}
					/>
					<img
						src='/assets/SVGs/LHDesigns/whine-dieline-back.svg'
						alt='whine-dieline-back'
						style={{
							width: isSmallScreen ? '65%' : '25%',
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
						src='/assets/Images/LHDesigns/whine-layout.png'
						alt='whine-layout'
						style={{ width: isSmallScreen ? '100%' : '50%', height: 'auto' }}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
