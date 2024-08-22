import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<Box sx={{ background: '#83371C', py: '5rem' }}>
			<Container>
				<Grid container direction='row' alignItems='center' spacing={4}>
					<Grid item xs={12} sx={{ mb: 4 }}>
						<Typography
							variant='h4'
							fontWeight='bold'
							textAlign='center'
							color='white'
						>
							Ready to enhance your space?
						</Typography>
						<Typography
							variant='body2'
							fontSize={20}
							textAlign='center'
							color='white'
							sx={{ mt: 2 }}
							fontWeight={300}
						>
							Contact us today for a free consultation and quote.
						</Typography>
						<Typography
							variant='body2'
							fontSize={20}
							textAlign='center'
							color='white'
							fontWeight={300}
						>
							Lets bring your vision to life!
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
