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

export const FishingContent = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid container direction='row' sx={{ px: 4, py: 2 }}>
			<Grid item xs={12} sx={{ py: 2 }}>
				<Typography variant='h2' fontWeight='bold'>
					fisch
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography color='text.secondary'>
						A BEGINNER FRIENDLY FISHING LURE BRAND
						<mark style={{ background: 'none', padding: '8px' }}>•</mark>
						FRIENDLY - FUN - RELIABLE
					</Typography>
				</Box>
			</Grid>
			<Breadcrumbs aria-label='breadcrumb' sx={{ pb: 4 }}>
				<Link underline='hover' color='inherit' href='/luhoca-designs'>
					Graphic Design
				</Link>
				<Typography color='text.primary'>Fisch</Typography>
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
								borderColor: '#ffde55',
								p: 2,
							}}
						>
							<Typography variant='h6' fontWeight='bold'>
								BRAND SUMMARY
							</Typography>
							<Typography>
								A beginner friendly fishing brand, offering effective and
								reliable gear. Fisch also offers online tutorials on how to take
								the most of their products.
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
								src='/assets/SVGs/LHDesigns/fishing-typography.svg'
								alt='fishing-typography'
								style={{ height: 'auto', maxHeight: '120px' }}
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
								src='/assets/SVGs/LHDesigns/fishing-palette.svg'
								alt='fishing-typography'
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
						src='/assets/Images/LHDesigns/fishing-line-box.png'
						alt='fishing-line-box'
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
					The logo was designed with the intention of creating a fish icon
					resembling a hook to emphasize "fishing". Slab Sans Serif fonts with
					curves to create a friendly appeal.
				</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<img
						src='/assets/SVGs/LHDesigns/fish-horizontal-logo.svg'
						alt='fish-horizontal-logo'
						style={{ width: isSmallScreen ? '45%' : '30%', height: 'auto' }}
					/>
					<img
						src='/assets/SVGs/LHDesigns/fish-stacked-logo.svg'
						alt='fish-stacked-logo'
						style={{ width: isSmallScreen ? '45%' : '20%', height: 'auto' }}
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
					The packages for retail contains simple iconology, using the fish from
					the logo to potray weight. Both packages encourage consumer to share
					their "catch" using or displaying the brand name to further push it to
					new consumers.
				</Typography>
				<Box
					sx={{
						display: ['block', 'flex'],
						alignItems: 'center',
						justifyContent: 'space-around',
					}}
				>
					<img
						src='/assets/Images/LHDesigns/fishing-Box-dieline.png'
						alt='fish-horizontal-logo'
						style={{
							width: isSmallScreen ? '100%' : '50%',
							height: 'auto',
							margin: 'auto',
							marginBottom: isSmallScreen && '16px',
						}}
					/>
					<img
						src='/assets/Images/LHDesigns/fishing-hook-dieline.png'
						alt='fish-stacked-logo'
						style={{
							width: isSmallScreen ? '50%' : '25%',
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
						backgroundColor: '#fffa7e',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/assets/Images/LHDesigns/fishing-hook-mockup.png'
						alt='fishing-hook-mockup'
						style={{ width: isSmallScreen ? '100%' : '50%', height: 'auto' }}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
