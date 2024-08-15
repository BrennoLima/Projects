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

export const DukDukContent = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<Grid container direction='row' sx={{ px: 4, py: 2 }}>
			<Grid item xs={12} sx={{ py: 2 }}>
				<Typography variant='h2' fontWeight='bold'>
					DUKDUK
				</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Typography color='text.secondary'>
						A CLASSIC EUROPEAN DESSERT - TURNED BAKERY
						<mark style={{ background: 'none', padding: '8px' }}>•</mark>
						PLAYFUL - SWEET - YOUNG
					</Typography>
				</Box>
			</Grid>
			<Breadcrumbs aria-label='breadcrumb' sx={{ pb: 4 }}>
				<Link underline='hover' color='inherit' href='/luhoca-designs'>
					Graphic Design
				</Link>
				<Typography fontWeight='bold' color='primary'>
					DUKDUK
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
								borderColor: '#ff64c4',
								p: 2,
							}}
						>
							<Typography variant='h6' fontWeight='bold'>
								BRAND SUMMARY
							</Typography>
							<Typography>
								A small bakery business that takes a new spin on a classic Czech
								dessert called "dukátové buchtičky"
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
								src='/assets/SVGs/LHDesigns/dukduk-typography.svg'
								alt='dukduk-typography'
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
								src='/assets/SVGs/LHDesigns/dukduk-palette.svg'
								alt='dukduk-palette'
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
						src='/assets/Images/LHDesigns/dukduk.png'
						alt='dukduk'
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
					The logo uses youthful contrasting colours, to reflect the "new" spin
					on the classic dish. Wording mimics the real name "dukátové buchtičky"
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/assets/SVGs/LHDesigns/dukduk-themelogo.svg'
						alt='dukduk theme and logo'
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
					SOCIAL MEDIA
				</Typography>
				<Box sx={{ display: ['block', 'flex'], alignItems: 'center', gap: 2 }}>
					<img
						src='/assets/SVGs/LHDesigns/dukduk-post-1.svg'
						alt='dukduk-logo'
						style={{
							width: isSmallScreen ? '100%' : '30%',
							height: 'auto',
							margin: 'auto',
							marginBottom: isSmallScreen && '16px',
						}}
					/>
					<img
						src='/assets/SVGs/LHDesigns/dukduk-post-2.svg'
						alt='dukduk-logo'
						style={{
							width: isSmallScreen ? '100%' : '30%',
							height: 'auto',
							margin: 'auto',
							marginBottom: isSmallScreen && '16px',
						}}
					/>
					<img
						src='/assets/SVGs/LHDesigns/dukduk-post-3.svg'
						alt='dukduk-logo'
						style={{
							width: isSmallScreen ? '100%' : '30%',
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
					BROCHURE
				</Typography>
				<Typography sx={{ mb: 4 }}>
					Purpose of the brochure is a fun way to introduce the menu to
					consumers and have their first interaction with the baker's playful
					brand. Mysteryous outside, hiting at the process and product to
					encourage looking into the contrasting menu within.
				</Typography>
				<Box
					sx={{
						width: 1,
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/assets/Images/LHDesigns/dukduk-mockup.png'
						alt='dukduk-mockup'
						style={{ width: '100%', height: 'auto' }}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
