import React from 'react';
import { Box } from '@mui/material';
import useWindowDimensions from '../../components/hooks/useWindowDimension';

export const ArtShowcase = () => {
	const { width } = useWindowDimensions();
	const video =
		'https://video.wixstatic.com/video/73f922_ebaa17637c09478ea6e2d53869655f2a/1080p/mp4/file.mp4';

	return (
		<Box sx={{ py: 6, borderBottom: '2px solid', borderColor: 'divider' }}>
			<video
				autoPlay
				loop
				playsInline
				className='video-background'
				muted
				style={{
					width: '100%',
					height: width > 768 ? '30vh' : '20vh',
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			>
				<source src={video} type='video/mp4' />
			</video>
		</Box>
	);
};
