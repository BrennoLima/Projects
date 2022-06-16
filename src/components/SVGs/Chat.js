import React from 'react';

export const Chat = () => {
	return (
		<svg
			width='100%'
			// height='144'
			viewBox='0 0 600 144'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='xMidYMid meet'
		>
			<g filter='url(#filter0_d_66_20)'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M43.7839 0C27.2153 0 13.7839 13.4315 13.7839 30V105.45L4 135.174L38.6064 127.913H566C582.569 127.913 596 114.482 596 97.9132V30C596 13.4315 582.569 0 566 0H43.7839Z'
					fill='white'
				/>
			</g>
			<defs>
				<filter
					id='filter0_d_66_20'
					x='0'
					y='0'
					width='600'
					height='143.174'
					filterUnits='userSpaceOnUse'
					colorInterpolationFilters='sRGB'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset dy='4' />
					<feGaussianBlur stdDeviation='2' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
					/>
					<feBlend
						mode='normal'
						in2='BackgroundImageFix'
						result='effect1_dropShadow_66_20'
					/>
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_66_20'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	);
};
