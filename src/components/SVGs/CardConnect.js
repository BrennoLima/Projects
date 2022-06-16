import React from 'react';

export const CardConnect = ({ color }) => {
	return (
		<svg
			preserveAspectRatio='xMidYMid meet'
			width='26'
			height='35'
			viewBox='0 0 26 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M2 13C5 14.5 5 21.5 2 23'
				stroke={color ? color : 'black'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 10C12 12.55 12 24.45 8 27'
				stroke={color ? color : 'black'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14 6C18 9.6 18 26.4 14 30'
				stroke={color ? color : 'black'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M20 2C25.3333 6.65 25.3333 28.35 20 33'
				stroke={color ? color : 'black'}
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
