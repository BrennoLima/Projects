import React, { useState } from 'react';
import {
	Box,
	Grid,
	Button,
	Container,
	Stack,
	IconButton,
	Dialog,
} from '@mui/material';
import { Logo } from './Logo';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Container>
			<Grid
				container
				direction='row'
				alignItems='center'
				justifyContent='space-between'
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					py: 2,
				}}
			>
				<Grid
					item
					sx={{
						width: ['7rem', '10rem'],
					}}
					id='panelcraft-interiors'
				>
					<Logo />
				</Grid>
				<Grid item sx={{ display: ['none', 'block'] }}>
					<Stack direction='row' gap={2}>
						<Button>Features</Button>
						<Button>Testimonials</Button>
						<Button>Contact us</Button>
					</Stack>
				</Grid>
				<Grid item sx={{ display: ['block', 'none'] }}>
					<IconButton onClick={() => setIsMenuOpen(true)}>
						<i className='fas fa-bars' key='menu' />
					</IconButton>
					<Dialog open={isMenuOpen} fullScreen>
						<Box>
							<Grid
								container
								direction='row'
								justifyContent='flex-start'
								sx={{ background: '#FEFBEA', height: '100vh' }}
							>
								<Grid
									item
									xs={12}
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										p: 4,
									}}
								>
									<Box sx={{ width: '50%' }}>
										<Logo />
									</Box>
								</Grid>

								<Grid
									item
									xs={12}
									sx={{
										height: 'calc(100vh - 127px) ',
										justifyContent: 'center',
										paddingTop: '40%',
									}}
								>
									<Stack gap={2}>
										<Button size='large' fullWidth>
											Features
										</Button>
										<Button size='large' fullWidth>
											Testimonials
										</Button>
										<Button size='large' fullWidth>
											Contact Us
										</Button>
									</Stack>
								</Grid>
							</Grid>
							<Box sx={{ display: 'flex', justifyContent: 'center' }}>
								<IconButton
									size='large'
									onClick={() => setIsMenuOpen(false)}
									sx={{
										position: 'absolute',
										bottom: '5%',
										width: '50px',
										height: '50px',
										boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
										background: '#FFFFFF40',
									}}
								>
									<i
										className='fas fa-times'
										key='close'
										style={{ color: (theme) => theme.palette.primary.main }}
									/>
								</IconButton>
							</Box>
						</Box>
					</Dialog>
				</Grid>
			</Grid>
		</Container>
	);
};
