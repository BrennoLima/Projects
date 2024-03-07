import React from 'react';
import { Stack, Typography, Avatar } from '@mui/material';

export const About = () => {
	return (
		<Stack sx={{ py: 10, alignItems: 'center' }} id='about'>
			<Avatar
				alt='Rafael Araujo'
				src='https://media.licdn.com/dms/image/C4D03AQEIZ_L6XO2X_w/profile-displayphoto-shrink_800_800/0/1605626268766?e=1715212800&v=beta&t=emZBq3G2gdBOLTt8Kr7JG0b9p8KSaCMi_PXibR25gRU'
				sx={{ width: '140px', height: '140px' }}
			/>
			<Typography
				variant='h5'
				sx={{ mt: 2, color: (theme) => theme.palette.primary.main }}
			>
				Rafael Araujo
			</Typography>
			<Typography
				variant='caption'
				sx={{ color: (theme) => theme.palette.primary.main }}
			>
				Graphic Designer
			</Typography>
		</Stack>
	);
};
