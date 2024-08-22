import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';

export const Features = () => {
	return (
		<Box sx={{ py: '4rem' }}>
			<Container>
				<Grid container direction='row' alignItems='center' spacing={4}>
					<Grid item xs={12} sx={{ mb: 4 }}>
						<Typography variant='h4' fontWeight='semibold' textAlign='center'>
							Why Choose PanelCraft Interiors?
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card
							elevation={0}
							sx={{ border: 1, borderColor: '#DDD', textAlign: 'center', p: 4 }}
						>
							<Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
								<img
									src='/assets/SVGs/Ruler.svg'
									alt='ruler'
									style={{ height: '50px' }}
								/>
							</Box>

							<Box>
								<Typography gutterBottom variant='h5' component='div'>
									Custom Sizing
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Perfectly fitted panels for any space, ensuring a seamless
									look.
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
								<img
									src='/assets/SVGs/Finishes.svg'
									alt='ruler'
									style={{ height: '50px' }}
								/>
							</Box>

							<Box>
								<Typography gutterBottom variant='h5' component='div'>
									Wide Range of Finishes
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Choose from various wood types and patterns to match your
									decor.
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
								<img
									src='/assets/SVGs/Hammer.svg'
									alt='ruler'
									style={{ height: '50px' }}
								/>
							</Box>

							<Box>
								<Typography gutterBottom variant='h5' component='div'>
									Expert Installation
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Our skilled team ensures flawless installation every time.
								</Typography>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
