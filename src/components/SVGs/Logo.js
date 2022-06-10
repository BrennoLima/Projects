import React from 'react';

export const Logo = ({ color = '#FFF', width = 50 }) => {
	return (
		<svg
			width='40'
			height='100%'
			viewBox='0 0 65 67'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMidYMid meet'
		>
			<path
				d='M20 25.5V11L32.5 3L45 11V25.5L32.5 34L20 25.5Z'
				stroke={color}
				strokeWidth='6'
				strokeLinejoin='round'
			/>
			<path
				d='M3 55.5V41L15.5 33L28 41V55.5L15.5 64L3 55.5Z'
				stroke={color}
				strokeWidth='6'
				strokeLinejoin='round'
			/>
			<path
				d='M37 55.5V41L49.5 33L62 41V55.5L49.5 64L37 55.5Z'
				stroke={color}
				strokeWidth='6'
				strokeLinejoin='round'
			/>
		</svg>
	);
};
