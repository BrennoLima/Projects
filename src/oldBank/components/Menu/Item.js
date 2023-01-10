import React, { useState } from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export const Item = ({ item }) => {
	const classes = {
		button: {
			background: '#4a4637',
			borderRadius: '0.3rem',
			padding: '0.2rem 3rem',
			marginTop: '0.4rem',
			transition: 'all 0.5s ease',
			border: '1px solid #4a4637',
		},
		title: {
			fontSize: '1rem',
			fontWeight: 'semi-bold',
			color: '#FFF',
			fontFamily: 'Gentium Book Plus',
			display: 'inline',
			textTransform: 'none',
		},
		item: {
			position: 'relative',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			'&:hover': {
				'& .image': {
					verticalAlign: 'middle',
					transform: 'scale(1.03)',
				},
			},
		},
		image: {
			cursor: 'pointer',
			width: '150px',
			height: '150px',
			borderRadius: '50%',
			border: '1px solid #6e695580',
			transition: 'all 1s ease',
		},
	};
	const [open, setOpen] = useState(false);

	return (
		<Grid container direction='row' alignItems='center' justify='center'>
			<Grid item xs={12} sx={classes.item}>
				<img
					onClick={() => setOpen(true)}
					style={classes.image}
					alt={item.name}
					src={item.image}
					className='image'
				/>
			</Grid>
			<Grid item xs={12} className='flex items-center justify-center'>
				<Button
					onClick={() => setOpen(true)}
					variant='outlined'
					style={classes.button}
				>
					<Typography align='center' style={classes.title}>
						{item.name}
					</Typography>
				</Button>
			</Grid>
			<Dialog
				TransitionComponent={Transition}
				open={open}
				onClose={() => setOpen(false)}
				maxWidth='sm'
				PaperProps={{
					style: {
						backgroundColor: '#fffbeb',
					},
				}}
			>
				<CardHeader
					title={
						<Typography className='font-semibold text-20'>
							{item.name}
						</Typography>
					}
					action={
						<IconButton onClick={() => setOpen(false)} key='close'>
							<i className='fas fa-times w-6 h-6' />
						</IconButton>
					}
				/>
				<Grid
					container
					direction='row'
					alignItems='center'
					justify='center'
					className='p-8 pt-0'
				>
					<Grid item xs={12} className='flex items-center justify-center'>
						<img
							onClick={() => setOpen(true)}
							alt={item.name}
							src={item.image}
							className='image'
							style={{ borderRadius: '0.5rem', height: '250px', width: 'auto' }}
						/>
					</Grid>
					<Grid item xs={12} className='pt-8'>
						<Typography className='text-16'>{item.description}</Typography>
					</Grid>
				</Grid>
			</Dialog>
		</Grid>
	);
};
