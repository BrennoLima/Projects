import React, { useState } from 'react';
// Components
import { BrennoNFT } from '../components/SVGs/BrennoNFT';
import { Chat } from '../components/SVGs/Chat';
import { ProjectCard } from './ProjectCard';
// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export const Landing = () => {
	const classes = {
		container: {
			// height: 'calc(100vh - 41px)',
			width: '100%',
			padding: '24px 0',
		},
		roundInput: {
			width: '100%',
			'& label.Mui-focused': {
				color: '#4D5C6F',
			},
			'& 	.Mui-error': {
				borderColor: 'red !important',
			},
			'& .MuiOutlinedInput-root': {
				borderRadius: '2rem',
				background: 'white',
				color: '#2C3642',
				'& fieldset': {
					borderColor: '#A5B6CD',
				},
				'&:hover fieldset': {
					borderColor: '#127C95',
				},
				'&.Mui-focused fieldset': {
					borderColor: '#127C95',
				},
			},
		},
		writingContainer: {
			width: '100%',
			height: '100%',
			zIndex: 10,
			position: 'absolute',
			top: 0,
			left: 0,
			// padding: '1rem 1.6rem',
		},
		chatContainer: {
			position: 'relative',
			width: '400px',
			paddingBottom: '10px',
		},
		infoWriting: {
			color: '#FCFCFC',
			fontWeight: 500,
			opacity: 0.5,
			fontSize: '14px',
		},
	};
	/////////// State/Control ////////////
	const [searchInput, setSearchInput] = useState('');
	const [allProjects] = useState([
		{
			name: 'Animated Portfolio',
			description: 'My portfolio displayed in an interactive way',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#4b427c',
			link: 'https://main.d3324w9pa0v55y.amplifyapp.com/',
		},
		{
			name: 'MetaFit',
			description:
				'AI fitness coach designed to create workout routines and nutrition plans',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#305685',
			link: 'https://main.d13hl5ygpmqiz5.amplifyapp.com/',
		},
		{
			name: 'RafaArts',
			description: 'Portfolion website for a 3d artist.',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#666666',
			route: '/rafa-arts',
		},
		{
			name: 'PanelCraft Interiors',
			description: 'Landing page for a wood interior design company',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#CD6C29',
			route: '/panelcraft-interiors',
		},
		{
			name: 'LHDesigns',
			description: 'Portfolion website for an illustrator.',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#65306e',
			route: '/luhoca-designs',
		},
		{
			name: 'Old Bank Cafe',
			description: 'Coffee Shop page',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#c9a200',
			route: '/old-bank',
		},
		{
			name: 'Mortgage calculator',
			description:
				'Mortgage calculator application with graphs and animations.',
			company: 'RBC',
			tags: '#chart.js #JavaScript #React #CSS #MaterialUI',
			background: '#005DAA',
			route: '/mortgage-calculator',
		},
		{
			name: 'Payment page',
			description:
				'Stepper payment page with form validation and responsive design.',
			company: 'Idea Theorem',
			tags: '#JavaScript #React #CSS #MaterialUI',
			background: '#EF4829',
			route: '/payment-page',
		},
		{
			name: 'Animated payment page',
			description: 'Payment page with a creative design and animations.',
			company: 'Own project',
			tags: '#JavaScript #React #CSS #MaterialUI #GSAP',
			background: '#1D8321',
			route: '/creative-card',
		},
	]);
	const onDisaplayProjects = allProjects.filter((project) =>
		project.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
	);

	return (
		<Container
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'calc(100vh - 41px)',
			}}
		>
			<Grid
				container
				direction='row'
				alignItems='stretch'
				justifyContent='center'
				sx={classes.container}
			>
				{/**
				 * Picture
				 */}
				<Grid
					item
					xs={4}
					className='flex items-center justify-start md:justify-end md:pb-10'
				>
					<BrennoNFT />
				</Grid>
				{/**
				 * Text
				 */}
				<Grid item xs={8} className='flex items-start'>
					<div style={classes.chatContainer}>
						<Chat />
						<div
							style={classes.writingContainer}
							className='flex items-center justify-center'
						>
							<Typography className='font-semibold pb-4'>
								Check out my short projects!
							</Typography>
						</div>
					</div>
				</Grid>
				{/**
				 * Search
				 */}
				<Grid item xs={12} md={8} className='py-6 md:py-10'>
					<TextField
						variant='outlined'
						color='primary'
						sx={classes.roundInput}
						size='small'
						placeholder='Project name, keywords...'
						autoComplete='off'
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton size='small'>
										<i className='fas fa-search' />
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={12} md={8} className='pb-6 md:pb-10'>
					<Typography sx={classes.infoWriting}>
						<i className='fas fa-info-circle mr-4' />
						Click on the project to open in its own page
					</Typography>
				</Grid>
				{/**
				 * Projects
				 */}
				<Grid
					item
					xs={12}
					md={8}
					container
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
				>
					{onDisaplayProjects.map((project) => (
						<Grid
							item
							xs={12}
							md={6}
							key={project.name}
							className='pb-4 md:pr-4'
						>
							<ProjectCard project={project} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Container>
	);
};
