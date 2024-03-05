import React, { useState } from 'react';
import { Box, Fade, Stack, IconButton, Typography } from '@mui/material';

export const ActionButtons = () => {
	const [label, setLabel] = useState('');

	const getIcon = (icon) => {
		switch (icon.icon) {
			case 'Portfolio':
				return <i className='fas fa-paint-brush' />;
			case 'Fan Art':
				return <i className='fas fa-gamepad' />;
			case 'Store':
				return <i className='fas fa-store' />;
			case 'Education':
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
			case 'Portfolio':
				element = document.getElementById('portfolio');
				return element.scrollIntoView({ behavior: 'smooth' });
			case 'Fan Art':
				element = document.getElementById('fanArt');
				element.scrollIntoView({ behavior: 'smooth' });
				return '';
			case 'Store':
				return (window.location.href = '/store');
			case 'Education':
				element = document.getElementById('education');
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
				onMouseEnter={() => setLabel(icon.icon)}
				onMouseLeave={() => setLabel('')}
				onClick={() => getAction(icon.icon)}
				sx={{
					transition: 'all 0.25s linear',
					fontSize: '32px',
					width: '50px',
					height: '50px',
					':hover': {
						transform: 'scale(1.1) translateY(-3px)',
						color: (theme) => theme.palette.primary.main,
					},
				}}
			>
				{getIcon(icon)}
			</IconButton>
		);
	};

	return (
		<Stack sx={{ py: 4 }}>
			<Stack direction='row' gap={3} sx={{ mb: 4, justifyContent: 'center' }}>
				{['Portfolio', 'Fan Art', 'Store', 'Education', 'About Me'].map(
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
						mb: 4,
						height: '32px',
						WebkitTextFillColor: 'transparent',
						backgroundClip: 'text !important',
						letterSpacing: '4px',
						background: (theme) =>
							`linear-gradient(${theme.palette.text.primary}, transparent)`,
					}}
				>
					{label.toLocaleUpperCase()}
				</Typography>
			</Fade>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<IconButton
					onClick={() => getAction('footer')}
					sx={{
						transition: 'all 0.25s linear',
						':hover': {
							color: (theme) => theme.palette.primary.main,
						},
					}}
				>
					<i className='fas fa-chevron-down' />
				</IconButton>
			</Box>
		</Stack>
	);
};
