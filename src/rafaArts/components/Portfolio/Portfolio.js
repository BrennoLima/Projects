import React from 'react';
import { Grid } from '@mui/material';
// Components
import { PortfolioSection } from './PortfolioSection';

export const Portfolio = () => {
	const characterArt = [
		'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/291289351/original/c95b51b3c31caf9cf908bd21bacf2a1ba0bd0a25/sculpt-3d-character-model-for-game-3d-printing-and-animation.png',
		'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/338820577/original/73031600fafb300c064bb163c17c24d47620ec98/do-3d-model-sculpt-high-quality-any-character-object-stl-dnd-for-3d-printing.png',
		'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/291289351/original/0d37d82efeff56b9e1cdb94c76921f3d85b2b4ae/sculpt-3d-character-model-for-game-3d-printing-and-animation.jpg',
		'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/336742781/original/d557afcb22ee6e9b56abb41778aedf6ddaf651ba/character-design-concept-for-you.png',
	];
	const fanArt = [
		'https://mir-s3-cdn-cf.behance.net/project_modules/disp/4385b186718333.5da20c1cc5bdc.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/disp/80a17186718333.5da20c1cc77ed.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/disp/4f093c86718333.5da20c1cc86e6.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b8921a86718333.5da20c1cc2e4f.png',
		'https://i.pinimg.com/originals/6a/e0/90/6ae090b7a61366ea9e27cc9109969469.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b2070c86718333.5da20c1cc26ea.png',
	];
	const products = [
		'https://d1231c29xbpffx.cloudfront.net/store/productimage/574826/image/b21415d0957005b45be40f9f483a3a7b.png?Expires=1708376937&Signature=VY2UOJNOPwhjZwhZiIlt0PCCvLLWYLPaHieIONqSh28wDwXclPZzJtUaqEV9p9Vu~nXF6zFkrqMKELA8U75joxUtfJgLvr5vnNx6u1C3-g3c5cADD0aiRoWJZZ64PffYKulLctlyllugOpQ83klas2J5ym76DRNvdhkK5shMAZEoEUeVCARIPF3Dpmd-~ibb7E6G6NwZqHGxezfEHnIozxMdhhz1~kACc~ZNrpNnqGUBUPUsiD-93WeBCaf0JQa2ucvQqe4z0pqlCHvC1iVoT0W3TZsJEWFIv1yDV0HXTUiXNJ5gsDuejPBBPcwWeqNO143-SNhIgCelCP-IGpxrtg__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ',
		'https://d1231c29xbpffx.cloudfront.net/store/productimage/574833/image/399a5c7864e47759ac911e94ae7b9504.png?Expires=1708376937&Signature=fujpSOyTOPvxAuj4c6kNhJVRUe8KeY1Ig4cmDFZPJPGfWESe5-QI1Q-jHesAD7FDTPL-wr50du87pyKcaVX-EEA0IubpLo9DihxcTJMnr2Mbi-bijeAFALWnDE6MLjQStNy8GVRXp9yc05stXvLiHUOF9jsWetJACjuyQtGg3iy4z4rPEJrpfDS4bqCQmXgoz7ixL1-R9ygKzfhW5JOp64x4ZCwPNV5SyA4hrzDTLqHAcWewPSN2WEecyYvwW3Tse4737lKgzgWQm8D0PYpEhbMJ~GGq2MePam513IqEmWYz1~Tmm8ZLKccA24A4wiER~7HUEMlMuLJ7iabUfmjCEQ__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ',
		'https://d1231c29xbpffx.cloudfront.net/store/productimage/574785/image/2c3c6d4f145da86241e8ed9e2985650c.png?Expires=1708376937&Signature=UT0k~fefy31izX079Yp342cvxnjFRCvu8j1lfoip2dNsuSSdXcNkRvGhtLM5ek8~zDQTCm6~tM9Z6Ffwruf4KjLEfSlyrPvYen3NlvAX2CLmd1waQkuyM4IyiDrE0nEKsLSeveuyEt48FUwkCM7jAXLWAglfs1hOC-TYiIjuuz6Bb~dhIWyWEOf-s2BHcWzZsGakXHHu7v2tJYUrL8Wi0Y~-1JIYEp97tMMIaRzIkfBDTDi6RguI3OEOG2StahtS2ET0a6gMcrh5o-LeDgQH3j0Y50xt0WIQ79EHcc1uvgRIiU~7UUGaib5mz2BOWDWE1m9hFBrmih2BvwPKE--SWw__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ',
		'https://d1231c29xbpffx.cloudfront.net/store/productimage/574831/image/0458432ce23f72f1b428b828e889cef6.png?Expires=1708376937&Signature=TuaDXnyGtyXOTZeUpSqwbmTb2x-dm0tiXa3p7~HoMYEuN8h-CQKJ5LL5Zoir5-jlVp~eFnr-fRCgJ~mptDE679BoCBCoqP8ZRSr~NQo0DRNqSrV5iokzGEPU9cBa2U6HwYx42~xcen1iPT29RXkq~TQcMoJFpLXoQpG7-HXPerIVS~6azCR-Vhvpugfurzv-lYZsM~KeW7ES4W3x2VmjutvrNZOEmxIgH-0iNGIvg3EWn-xM-RVcZ2IooY7eWNnTnVytbqMTibBdczWFuk-8hDWnaN9a~xLjNMqx8JFVtc9PDXTE1tIglQDeG73Z--Fmfkx-ELFcz9044QwnxVJnHA__&Key-Pair-Id=APKAIN6COYBF3ZQW7OQQ',
	];
	return (
		<Grid
			container
			direction='row'
			alignItems='center'
			justify='center'
			sx={{ py: [3, 6] }}
			gap={[3, 6]}
		>
			<PortfolioSection
				images={characterArt}
				title='Character Art'
				text='There will be some small section here to talk about the art. There will be some small section here to talk about the art'
				buttonText='View Full Galery'
				link='/galery'
				sectionId='character-art'
				sectionNum={1}
			/>
			<PortfolioSection
				images={fanArt}
				title='Fan Art'
				text='There will be some small section here to talk about the art. There will be some small section here to talk about the art'
				buttonText='View Instagram'
				link='/galery'
				sectionId='fan-art'
				sectionNum={2}
			/>
			<PortfolioSection
				images={products}
				title='Products'
				text='There will be some small section here to talk about the art. There will be some small section here to talk about the art'
				buttonText='View Store'
				link='/store'
				sectionNum={3}
			/>
		</Grid>
	);
};
