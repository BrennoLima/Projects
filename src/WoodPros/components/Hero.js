import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

export const Hero = () => {
	return (
		<Box sx={{ background: '#FEFBEA', py: '3rem' }}>
			<Container>
				<Grid container direction='row' alignItems='center' spacing={10}>
					<Grid item xs={12} md={6} sx={{ width: 1 }}>
						<Typography variant='h2' fontWeight='medium'>
							Elevate your space
						</Typography>
						<Typography variant='h6' fontWeight='400' sx={{ my: 5 }}>
							Transform your interiors with our premium wood panel
							installations, creating a warm, sophisticated ambiance that
							seamlessly blends modern design with natural beauty.
						</Typography>
						<Grid container direction='row' alignItems='center' spacing={2}>
							<Grid item xs={12} md={6}>
								<Button sx={{ width: 1 }} variant='contained'>
									Get a Free Consultation
								</Button>
							</Grid>
							<Grid item xs={12} md={6}>
								<Button sx={{ width: 1 }} variant='outlined'>
									View Our Gallery
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} sx={{ width: 1 }}>
						<img
							src='/assets/Images/woodPanel.jpg'
							alt='wood-panel'
							style={{
								width: '100%',
								backgroundSize: 'cover',
								borderRadius: 5,
							}}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
