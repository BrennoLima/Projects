import React from 'react';
// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const NFTAsset = ({ asset }) => {
	const classes = {
		container: {
			position: 'relative',
			borderRadius: '1rem',
			overflow: 'hidden',
			background: '#ffffff1a',
			transition: 'all 0.5s ease',
			cursor: 'pointer',
			boxShadow: '1px 2px 3px rgb(0 0 0 / 50%)',
			'&:hover': {
				'& .img': {
					borderRadius: '1rem 1rem 0 0',
					verticalAlign: 'middle',
					transform: 'scale(1.1)',
				},
			},
		},
		img: {
			width: '100%',
			height: 'auto',
			borderRadius: '1rem 1rem 0 0',
			transition: 'all .5s ease',
		},
	};

	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justifyContent='center'
			sx={classes.container}
		>
			<Grid
				item
				xs={12}
				className='flex items-center justify-center p-4'
				style={{ overflow: 'hidden' }}
			>
				<img
					src={asset.image_url}
					alt={'nft'}
					style={classes.img}
					className='img'
				/>
			</Grid>
			<Grid item xs={12} className='p-4 w-full'>
				<Typography className='font-semibold text-12 long-text white'>
					{decodeURI(asset.collection.name)}
				</Typography>
				<Typography className='font-medium text-12 long-text white'>
					{asset.token_id}
				</Typography>
			</Grid>
		</Grid>
	);
};
