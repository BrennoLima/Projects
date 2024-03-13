import React, { useState, useEffect } from 'react';
import { Box, Fade, Stack, IconButton, Typography } from '@mui/material';
import { CharacterIcon } from './CharacterIcon';
import { FanArtIcon } from './FanArtIcon';
import gsap from 'gsap';

export const ActionButtons = () => {
	const [label, setLabel] = useState('');

	const getIcon = (icon) => {
		switch (icon.icon) {
			case 'Character Art':
				return <CharacterIcon />;
			case 'Fan Art':
				return <FanArtIcon />;
			case 'Store':
				return <i className='fas fa-store' />;
			case 'Courses':
				return <i className='fas fa-university' />;
			case 'About Me':
				return <i className='fas fa-user-alt' />;
			default:
				break;
		}
	};

	const getAction = (icon) => {
		let element = null;
		switch (icon) {
			case 'Character Art':
				element = document.getElementById('character-art');
				return element.scrollIntoView({ behavior: 'smooth' });
			case 'Fan Art':
				element = document.getElementById('fan-art');
				element.scrollIntoView({ behavior: 'smooth' });
				return '';
			case 'Store':
				return (window.location.href = '/store');
			case 'Courses':
				element = document.getElementById('courses');
				return element.scrollIntoView({ behavior: 'smooth' });
			case 'About Me':
				element = document.getElementById('about');
				return element.scrollIntoView({ behavior: 'smooth' });
			case 'footer':
				element = document.getElementById('footer');
				return element.scrollIntoView({
					behavior: 'smooth',
				});
			default:
				break;
		}
	};

	const ActionButton = (icon) => {
		return (
			<IconButton
				className='action-button'
				onMouseEnter={() => setLabel(icon.icon)}
				onMouseLeave={() => setLabel('')}
				onClick={() => getAction(icon.icon)}
				sx={{
					overflow: 'hidden',
					color: (theme) => theme.palette.text.secondary,
					transition: 'all 0.1s linear',
					fontSize: ['1.5rem', '2rem'],
					width: ['2.5rem', '3rem'],
					height: ['2.5rem', '3rem'],
					':hover': {
						transform: 'scale(1.1) translateY(-3px)',
					},
				}}
			>
				{getIcon(icon)}
			</IconButton>
		);
	};

	useEffect(() => {
		gsap.fromTo(
			'.action-button',
			{ opacity: 0 },
			{
				opacity: '100%',
				stagger: 0.1,
				duration: 1,
				ease: 'power3.in',
				delay: 1,
			}
		);
		gsap.fromTo(
			'#scroll-down-button',
			{ opacity: 0, y: 50 },
			{
				opacity: '100%',
				y: 0,
				duration: 1,
				ease: 'linear',
				delay: 1,
			}
		);
	}, []);

	return (
		<Stack sx={{ py: 4 }} id='actions'>
			<Stack
				direction='row'
				gap={3}
				sx={{ mb: [2, 4], justifyContent: 'center' }}
			>
				{['Character Art', 'Fan Art', 'Store', 'Courses', 'About Me'].map(
					(icon) => (
						<ActionButton icon={icon} key={icon} />
					)
				)}
			</Stack>
			<Fade timeout={1000} in={label !== ''}>
				<Typography
					align='center'
					fontWeight='bold'
					variant='h5'
					sx={{
						mb: [2, 4],
						height: '32px',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text !important',
						letterSpacing: '2px',
						background: (theme) =>
							`linear-gradient(${theme.palette.text.primary}, ${theme.palette.divider})`,
					}}
				>
					{label.toLocaleUpperCase()}
				</Typography>
			</Fade>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<IconButton
					id='scroll-down-button'
					onClick={() => getAction('footer')}
					sx={{
						transition: '0.2s color ease-in',
						'&:hover': {
							color: (theme) => theme.palette.text.primary,
						},
					}}
				>
					<i className='fas fa-chevron-down' />
				</IconButton>
			</Box>
		</Stack>
	);
};
