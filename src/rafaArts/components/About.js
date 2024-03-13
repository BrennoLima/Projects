import React, { useEffect } from 'react';
import {
	Box,
	Container,
	IconButton,
	Stack,
	Typography,
	Avatar,
} from '@mui/material';
import { SocialMedias } from './SocialMedias';
import { useTheme } from '@emotion/react';
// GSAP
import { gsap, ScrollTrigger } from 'gsap/all';

export const About = () => {
	const theme = useTheme();
	const scrollToActions = () => {
		const element = document.getElementById('actions');
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.fromTo(
			'#avatar',
			{ opacity: 0, y: 50 },
			{
				scrollTrigger: '#avatar',
				opacity: '100%',
				y: 0,
				duration: 1,
			}
		);

		gsap.fromTo(
			'#text1',
			{ opacity: 0, y: 50 },
			{
				scrollTrigger: '#text1',
				opacity: '100%',
				y: 0,
				duration: 1,
			}
		);
		gsap.fromTo(
			'#text2',
			{ opacity: 0, y: 50 },
			{
				scrollTrigger: '#text2',
				opacity: '100%',
				y: 0,
				duration: 1,
			}
		);
	}, []);

	return (
		<Box
			sx={{
				background: `linear-gradient(180deg, ${theme.palette.divider}, ${theme.palette.background.paper})`,
			}}
		>
			<Container>
				<Stack sx={{ py: [5, 10], alignItems: 'center' }} id='about'>
					<Stack sx={{ alignItems: 'center' }} id='avatar'>
						<Avatar
							alt='Rafael Araujo'
							src='https://media.licdn.com/dms/image/C4D03AQEIZ_L6XO2X_w/profile-displayphoto-shrink_800_800/0/1605626268766?e=1715212800&v=beta&t=emZBq3G2gdBOLTt8Kr7JG0b9p8KSaCMi_PXibR25gRU'
							sx={{ width: '140px', height: '140px' }}
						/>
						<Typography
							variant='h5'
							sx={{ mt: 2, color: (theme) => theme.palette.text.primary }}
						>
							Rafael Araujo
						</Typography>
						<Typography
							variant='caption'
							sx={{ color: (theme) => theme.palette.text.secondary }}
						>
							3D Artist
						</Typography>
					</Stack>

					<Box sx={{ p: 5, px: [2, 10] }}>
						<Typography
							id='text1'
							variant='body2'
							align='center'
							sx={{
								color: (theme) => theme.palette.text.secondary,
								lineHeight: '1.5',
							}}
						>
							As a character artist with a fervent passion for bridging the gap
							between 2D and 3D realms, I embarked on my journey in the world of
							creative expression with a degree in Game Arts from George Brown
							College. Fuelled by a relentless drive to immerse myself in the
							transformative power of 3D art, I am currently seeking new
							opportunities to apply and further develop my skills in a
							professional setting.
						</Typography>
						<Typography
							id='text2'
							variant='body2'
							align='center'
							sx={{
								color: (theme) => theme.palette.text.secondary,
								mt: 2,
								lineHeight: '1.5',
							}}
						>
							Proficient in a diverse array of tools and software, including
							Photoshop, Illustrator, 3D Studio Max, and Maya, I navigate the
							digital landscape with versatility and finesse. My experience
							includes refining my craft at a dynamic startup, where I thrived
							on translating conceptual ideas into visually striking assets
							tailored for web and digital platforms. Yet, my journey as an
							artist is defined not only by technical prowess but also by an
							insatiable thirst for knowledge and inspiration. Every project
							serves as a canvas for growth, as I remain steadfast in my
							commitment to honing my craft, pushing creative boundaries, and
							leaving an indelible mark on the world of 3D art.
						</Typography>
					</Box>
					<Box
						sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
						id='text2'
					>
						<IconButton
							onClick={scrollToActions}
							sx={{
								transition: '0.2s color ease-in',
								'&:hover': {
									color: (theme) => theme.palette.text.primary,
								},
							}}
						>
							<i className='fas fa-chevron-up' />
						</IconButton>
					</Box>
					<SocialMedias />
				</Stack>
			</Container>
		</Box>
	);
};
