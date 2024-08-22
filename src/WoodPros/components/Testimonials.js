import React from 'react';
import { Box, Container, Grid, Typography, Card, Rating } from '@mui/material';

export const Testimonials = () => {
	return (
		<Box sx={{ background: '#FEFBEA', py: '5rem' }}>
			<Container>
				<Grid container direction='row' alignItems='center' spacing={4}>
					<Grid item xs={12} sx={{ mb: 4 }}>
						<Typography variant='h4' fontWeight='semibold' textAlign='center'>
							What Our Customers Say
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card
							elevation={0}
							sx={{ border: 1, borderColor: '#DDD', textAlign: 'center', p: 4 }}
						>
							<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
								<Rating name='read-only' value={5} readOnly />
							</Box>
							<Box>
								<Typography variant='body2' color='text.secondary'>
									"The wood panels have completely transformed our living room,
									giving it a modern and luxurious feel."
								</Typography>
								<Typography
									variant='body2'
									fontWeight='semibold'
									sx={{ mt: 1 }}
								>
									- Brenno Lima (owner)
								</Typography>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card
							elevation={0}
							sx={{ border: 1, borderColor: '#DDD', textAlign: 'center', p: 4 }}
						>
							<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
								<Rating name='read-only' value={5} readOnly />
							</Box>

							<Box>
								<Typography variant='body2' color='text.secondary'>
									"The wood panels have completely transformed our living room,
									giving it a modern and luxurious feel."
								</Typography>
								<Typography
									variant='body2'
									fontWeight='semibold'
									sx={{ mt: 1 }}
								>
									- Brenno Lima (owner)
								</Typography>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card
							elevation={0}
							sx={{ border: 1, borderColor: '#DDD', textAlign: 'center', p: 4 }}
						>
							<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
								<Rating name='read-only' value={5} readOnly />
							</Box>

							<Box>
								<Typography variant='body2' color='text.secondary'>
									"The wood panels have completely transformed our living room,
									giving it a modern and luxurious feel."
								</Typography>
								<Typography
									variant='body2'
									fontWeight='semibold'
									sx={{ mt: 1 }}
								>
									- Brenno Lima (owner)
								</Typography>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
