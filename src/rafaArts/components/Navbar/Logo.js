import React from 'react';
import { useTheme } from '@mui/material/styles';

export const Logo = () => {
	const theme = useTheme();

	return (
		<svg
			width='100%'
			preserveAspectRatio='xMidYMid meet'
			viewBox='0 0 100 100'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='50' cy='50' r='50' fill='url(#gradient)' />
			<path
				d='M48.6165 62.967C54.0623 62.2473 63.2748 57.8475 63.3282 45.3974C63.3981 29.2005 44.8537 18.5326 34 31.6238L34.5407 32.2104C45.9191 22.4187 61.1813 32.1789 60.4421 45.1663C59.4043 63.397 39.151 60.0586 39.045 60.0649L39.0042 64.1987C59.2018 63.6109 29.4258 102.108 59.1766 95.8303L59.0837 95.133C41.4195 94.4615 61.0683 67.1231 48.6165 62.967Z'
				fill={theme.palette.text.primary}
			/>
			<path
				d='M48.7489 6.66515C48.4284 7.57918 42.8352 27.2578 36.7536 30.5418L36.2088 29.5326C43.3158 25.6947 47.2391 3.02507 49.1096 4.03257C51.7795 5.47129 59.0258 73.3689 71.8498 62.8661L72 62.9768C69.8772 65.8576 55.0376 85.6613 48.7489 6.66515Z'
				fill={theme.palette.text.primary}
			/>
			<defs>
				<linearGradient
					id='gradient'
					x1='0'
					y1='0'
					x2='100'
					y2='100'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={theme.palette.divider} />
					<stop
						offset='1'
						stopColor={theme.palette.primary.contrastText}
						stopOpacity='0'
					/>
				</linearGradient>
			</defs>
		</svg>
	);
};
