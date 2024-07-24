import React, { useEffect } from 'react';
import { Link, IconButton, Stack } from '@mui/material';
// Gsap
import gsap from 'gsap';

export const SocialMedias = ({ direction = 'row' }) => {
	const btnClass = {
		transition: '0.2s color ease-in',
		'&:hover': {
			color: (theme) => theme.palette.text.primary,
		},
	};

	useEffect(() => {
		if (direction === 'column') {
			gsap.fromTo(
				'.social-btn',
				{ x: -20, opacity: 0 },
				{ x: 0, opacity: 1, stagger: 0.2, duration: 1, delay: 1 }
			);
		}
	}, [direction]);

	return (
		<Stack
			direction={direction}
			gap={1}
			id='social-medias'
			sx={{ justifyContent: 'center' }}
		>
			<IconButton
				className='social-btn'
				size='small'
				sx={btnClass}
				href='https://www.instagram.com/luciehoca_illustration/'
				target='_blank'
			>
				<i className='fab fa-instagram' />
			</IconButton>
			<IconButton
				className='social-btn'
				size='small'
				sx={btnClass}
				href='https://www.linkedin.com/in/lucie-hoca-b03019172/'
				target='_blank'
			>
				<i className='fab fa-linkedin' />
			</IconButton>
			<IconButton
				component={Link}
				className='social-btn'
				size='small'
				sx={btnClass}
				href='mailto:hocalucie98@gmail.com'
			>
				<i className='fas fa-envelope' />
			</IconButton>
		</Stack>
	);
};
