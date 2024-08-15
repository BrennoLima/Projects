import React from 'react';

import { Grid, Typography } from '@mui/material';

export const AboutMe = () => {
	return (
		<Grid container direction='row' sx={{ mb: 10 }}>
			<Grid item xs={12} sx={{ py: [3, 6] }}>
				<Typography
					color='primary'
					textAlign='center'
					variant='h4'
					fontWeight='semibold'
				>
					About Me
				</Typography>
			</Grid>
			<Grid
				item
				xs={12}
				sx={{ display: 'flex', justifyContent: 'center', pb: 4 }}
			>
				<img
					src='/assets/Images/LHDesigns/luciepic2.jpg'
					alt='lucie-profile'
					style={{
						height: '50vh',
						width: 'auto',
						borderRadius: 4,
						objectFit: 'cover',
					}}
				/>
			</Grid>
			<Grid item xs={12} sx={{ px: [4, 10] }}>
				<Typography fontWeight='semibold' variant='h6' sx={{ mb: 2 }}>
					HI, I AM LUCIE!
				</Typography>
				<Typography sx={{ mb: 2 }}>
					I'm a freelance illustrator and animator specializing in colourful
					children's illustrations and lettering. I love drawing fun characters
					and sometimes make short films too.
				</Typography>
				<Typography sx={{ mb: 2 }}>
					I grew up in a small village but soon decided to move to Hamburg to
					study graphic design. In 2014, I graduated with my short film »looks«
					that has to this day been screened at more than 100 festivals all over
					the world. In 2019 I finished my master studies with my two children's
					books “Boys Will Be…” and “Girls Are Pretty…”, published by Hardie
					Grant Egmont/Little Hare Books.
				</Typography>
				<Typography sx={{ mb: 2 }}>
					I have done work for Adobe, Prime Video, The Washington Post's digital
					design team, Galison, Penguin RandomHouse, Hardie Grant Egmont/Little
					Hare Books, Editions Milan, CLIFkid, Hanser, WillaWunst, CinemaxX
					Entertainment and Techniker Krankenkasse, among others.
				</Typography>
				<Typography sx={{ mb: 2 }}>
					In my free time I enjoy reading, spending time with loved ones,
					walking through nature and petting all the cats and dogs I can find.
				</Typography>
			</Grid>
		</Grid>
	);
};
