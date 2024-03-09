import React, { useState } from 'react';
import { Box, Dialog, Card, IconButton } from '@mui/material';

export const ImageCard = ({ image }) => {
	const [openImage, setOpenImage] = useState(false);

	return (
		<Box sx={{ overflow: 'hidden' }}>
			<Card
				onDrag={(e) => e.stopPropagation()}
				onClick={() => setOpenImage(true)}
				sx={{
					height: '400px',
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					cursor: 'pointer',
					transition: 'all 0.5s ease',
					':hover': {
						transform: 'scale(1.1)',
					},
				}}
			/>
			{openImage && (
				<Dialog fullWidth open={openImage} onClose={() => setOpenImage(false)}>
					<Box
						sx={{
							height: '75vh',
							backgroundImage: `url(${image})`,
							backgroundPosition: 'center',
							backgroundSize: 'contain',
							backgroundRepeat: 'no-repeat',
							backgroundColor: '#000',
						}}
					>
						<IconButton
							onClick={() => setOpenImage(false)}
							sx={{
								position: 'absolute',
								top: '8px',
								right: '8px',
								width: '45px',
								height: '45px',
							}}
						>
							<i className='fas fa-times' />
						</IconButton>
					</Box>
				</Dialog>
			)}
		</Box>
	);
};
