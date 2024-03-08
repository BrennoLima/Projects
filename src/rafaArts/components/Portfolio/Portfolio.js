import React from 'react';
import { Grid } from '@mui/material';
// Components
import { PortfolioSection } from './PortfolioSection';

export const Portfolio = () => {
	const slides = [
		'https://preview.redd.it/cft55rgmozn11.jpg?width=891&format=pjpg&auto=webp&s=a63265864edd3640b14b5df121fb8a01e07af8ea',
		'https://www.zbrushcentral.com/uploads/default/original/4X/d/d/8/dd886b37c406dc337e2d08cc49b56396be6ca3a7.jpeg',
		'https://p.turbosquid.com/ts-thumb/gx/RI7ZAd/EW/render_1/jpg/1687965923/1920x1080/fit_q87/7166fd719815f267100e7f14bc2433d4e16d7052/render_1.jpg',
		'https://media.cgtrader.com/variants/1oPmZRxgdCoshequwxRr2nNn/64d1262c1acde2eb3beef249c4695a8ad88c958dd79db36f763bf631017addd0/render_3.jpg',
	];
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='center'
			sx={{ py: 6 }}
			gap={6}
		>
			<PortfolioSection
				images={slides}
				title='Character Art'
				text='There will be some small section here to talk about the art. There will be some small section here to talk about the art'
				buttonText='View Full Galery'
				link='/galery'
				sectionId='character-art'
			/>
			<PortfolioSection
				images={slides}
				title='Fan Art'
				text='There will be some small section here to talk about the art. There will be some small section here to talk about the art'
				buttonText='View Instagram'
				link='/galery'
				sectionId='fan-art'
			/>
			<PortfolioSection
				images={slides}
				title='Products'
				text='There will be some small section here to talk about the art. There will be some small section here to talk about the art'
				buttonText='View Store'
				link='/store'
			/>
		</Grid>
	);
};
