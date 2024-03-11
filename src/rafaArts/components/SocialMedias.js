import React from 'react';
import { IconButton, Stack } from '@mui/material';

export const SocialMedias = ({ direction = 'row' }) => {
	const btnClass = {
		transition: '0.2s color ease-in',
		'&:hover': {
			color: (theme) => theme.palette.text.primary,
		},
	};
	return (
		<Stack direction={direction} gap={1}>
			<IconButton sx={btnClass}>
				<i className='fab fa-instagram' />
			</IconButton>
			<IconButton sx={btnClass}>
				<i className='fab fa-linkedin' />
			</IconButton>
			<IconButton sx={btnClass}>
				<i className='fab fa-facebook' />
			</IconButton>
			<IconButton sx={btnClass}>
				<i className='fas fa-envelope' />
			</IconButton>
		</Stack>
	);
};
