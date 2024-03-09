import React from 'react';
import { IconButton, Stack } from '@mui/material';

export const SocialMedias = ({ direction = 'row' }) => {
	return (
		<Stack direction={direction} gap={1}>
			<IconButton>
				<i className='fab fa-instagram' />
			</IconButton>
			<IconButton>
				<i className='fab fa-linkedin' />
			</IconButton>
			<IconButton>
				<i className='fab fa-facebook' />
			</IconButton>
			<IconButton>
				<i className='fas fa-envelope' />
			</IconButton>
		</Stack>
	);
};
