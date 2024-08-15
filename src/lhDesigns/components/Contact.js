import React from 'react';

import { Grid, Typography } from '@mui/material';
import { SocialMedias } from './SocialMedias';

export const Contact = () => {
	return (
		<Grid container direction='row' sx={{ mb: 10 }}>
			<Grid item xs={12} sx={{ py: 6 }}>
				<Typography
					color='primary'
					textAlign='center'
					variant='h4'
					fontWeight='semibold'
				>
					Contact Me
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					py: 4,
				}}
			>
				<Typography textAlign='center' sx={{ maxWidth: '500px !important' }}>
					If you're interested in commissioning me, in collaborating with me or
					if you just really want a portrait of your pet platypus — I'd love to
					hear from you! ❤
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<SocialMedias />
			</Grid>
		</Grid>
	);
};
