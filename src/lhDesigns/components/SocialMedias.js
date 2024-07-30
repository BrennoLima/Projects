import React from 'react';
import { Link, IconButton, Stack } from '@mui/material';

export const SocialMedias = ({ direction = 'row', size = 'small' }) => {
	const btnClass = {
		transition: '0.2s color ease-in',
		'&:hover': {
			color: (theme) => theme.palette.text.primary,
		},
	};

	return (
		<Stack
			direction={direction}
			gap={1}
			id='social-medias'
			sx={{ justifyContent: 'center' }}
		>
			<IconButton
				className='social-btn'
				size={size}
				sx={btnClass}
				href='https://www.instagram.com/luciehoca_illustration/'
				target='_blank'
			>
				<i className='fab fa-instagram' />
			</IconButton>
			<IconButton
				className='social-btn'
				size={size}
				sx={btnClass}
				href='https://www.linkedin.com/in/lucie-hoca-b03019172/'
				target='_blank'
			>
				<i className='fab fa-linkedin' />
			</IconButton>
			<IconButton
				component={Link}
				className='social-btn'
				size={size}
				sx={btnClass}
				href='mailto:hocalucie98@gmail.com'
			>
				<i className='fas fa-envelope' />
			</IconButton>
		</Stack>
	);
};
