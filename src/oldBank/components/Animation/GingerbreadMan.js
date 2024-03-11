import React, { useEffect } from 'react';
import gsap from 'gsap';

export const GingerbreadMan = () => {
	useEffect(() => {
		var tl = gsap.timeline({
			repeat: -1,
			repeatDelay: 4,
			defaults: { duration: 1, ease: 'linear' },
		});
		tl.fromTo('#body', { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		tl.fromTo(
			'#outline-decoration',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 }
		);
		tl.fromTo('#left-eye', { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		tl.fromTo(
			'#right-eye',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 },
			'-=1'
		);
		tl.fromTo(
			'#right-arm-decoration',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 }
		);
		tl.fromTo(
			'#left-arm-decoration',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 },
			'-=1'
		);
		tl.fromTo(
			'#right-leg-decoration',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 },
			'-=1'
		);
		tl.fromTo(
			'#left-leg-decoration',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 },
			'-=1'
		);
		tl.fromTo('#button-2', { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		tl.fromTo(
			'#button-1',
			{ opacity: 0, y: -100 },
			{ opacity: 1, y: 0 },
			'-=0.5'
		);
		tl.fromTo('#tie', { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, '-=0.5');
		tl.fromTo('#mouth', { opacity: 0, y: -100 }, { opacity: 1, y: 0 });
		tl.to('#gingerman', {
			transformOrigin: 'center',
			rotate: 10,
			repeat: 4,
			yoyo: true,
			ease: 'power1.inOut',
		});
	}, []);

	return (
		<svg
			width='auto'
			height='300'
			preserveAspectRatio='xMidYMid meet'
			viewBox='0 0 302 302'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g id='gingerbread'>
				<path
					id='background'
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M149.442 1.53902C202.946 -1.66215 266.469 9.08989 293.519 41.996C319.103 73.1172 271.224 108.326 266.726 144.211C263.026 173.741 289.596 203.553 269.991 229.734C244.505 263.768 203.646 298.293 149.442 300.831C93.8508 303.434 40.826 275.583 11.8536 241.823C-12.947 212.924 12.1087 177.981 15.032 144.211C17.6305 114.194 4.22 82.8989 27.7755 57.8954C55.7541 28.1969 99.2693 4.54084 149.442 1.53902Z'
					fill='#FFFBEB'
					stroke='#E4E3CC'
				/>
				<g id='gingerman'>
					<path
						id='body'
						d='M99.2436 67.0874C86.9149 92.3179 108.49 116.26 120.819 125.077C119.449 126.433 114.552 128.332 107.976 129.146C101.401 129.96 90.5108 130.503 85.3739 130.164C78.7986 125.28 72.189 124.738 69.963 125.077C65.511 125.077 56.0932 127.925 54.0384 139.32C51.9837 150.714 53.5248 157.124 54.0385 158.65C57.1206 165.771 67.737 170.519 73.0451 171.875L115.168 169.332C111.915 180.184 104.997 203.312 103.353 209.009C101.709 214.706 95.819 220.2 93.0792 222.235C88.9697 223.252 79.2095 225.796 73.0451 227.83C66.8808 229.865 66.8809 236.986 66.8809 239.53C66.8809 243.091 79.2096 260.894 89.4835 266.49C97.7026 270.966 116.196 264.455 123.387 260.386L152.668 226.304C160.544 236.308 179.688 258.046 193.25 258.86C210.202 259.877 214.311 258.351 225.612 251.738C236.914 245.125 236.914 225.287 236.914 220.2C236.914 216.131 232.462 215.791 230.236 216.131H214.311L179.38 164.754C193.078 164.245 221.914 162.719 227.667 160.684C233.421 158.65 238.284 153.224 238.969 150.511C240.51 148.476 240.167 134.572 238.969 127.62C238.284 125.246 233.421 119.99 227.667 117.955C221.914 115.921 216.366 118.803 214.311 120.499L169.106 123.551L184.003 105.747C189.14 96.0821 191.606 72.3776 180.921 56.9138C170.236 41.4499 150.613 37.923 142.908 38.0926C133.49 37.2448 111.572 41.8568 99.2436 67.0874Z'
						fill='#866039'
					/>
					<circle
						id='left-eye'
						cx='126.452'
						cy='81.4523'
						r='6'
						transform='rotate(-4.5 126.452 81.4523)'
						fill='#D9D9D9'
					/>
					<circle
						id='right-eye'
						cx='157.452'
						cy='78.4523'
						r='6'
						transform='rotate(-4.5 157.452 78.4523)'
						fill='#D9D9D9'
					/>
					<path
						id='outline-decoration'
						d='M101.007 69.3092C89.0081 93.8872 111.501 116.652 123.5 125.241C122.167 126.563 116.391 130.216 109.992 131.009C103.592 131.801 90.9996 132.33 86 132C79.6005 127.243 69.5 127.72 69.5 127.72C65.167 127.72 58.0105 128.574 56.0107 139.674C54.0109 150.773 56.5107 157.017 57.0107 158.504C60.0105 165.441 70.3429 170.066 75.5092 171.387L116.506 168.91C113.339 179.481 106.607 202.011 105.007 207.561C103.407 213.11 100.166 219.423 97.5 221.405C94.8335 223.387 81.5087 227.854 75.5092 229.836C69.5097 231.818 69.5097 238.755 69.5097 241.233C69.5097 244.701 81.5088 258.104 91.508 263.555C99.5073 267.915 117.995 263.391 123.5 258.5L138 241L152.5 223.388C160.166 233.133 179.301 255.329 192.5 256.122C208.998 257.113 212.998 255.626 223.997 249.185C234.984 242.75 234.984 225.438 234.984 220.461V220.444C234.984 216.48 228.5 217.935 226.5 217.935L212.5 217.5L179.001 164.45C192.333 163.954 220.397 162.468 225.997 160.486C231.597 158.504 236.33 153.218 236.996 150.575C238.496 148.593 238.163 135.049 236.996 128.277C236.33 125.964 231.597 120.844 225.997 118.862C220.397 116.88 217 120.5 212.998 121.339L169.002 124.312L183.5 105.5C190 97.5 190.9 74.4627 180.501 59.3987C170.102 44.3348 151.003 40.8992 143.504 41.0643C134.338 40.2385 113.006 44.7312 101.007 69.3092Z'
						stroke='#E4E3CC'
						stroke-width='2'
						stroke-linejoin='round'
					/>
					<path
						id='left-arm-decoration'
						d='M95 132C88.3647 134.085 77.7503 139.248 90 143C102.25 146.752 94.3225 149.261 87.5 150C84.8225 150.761 82.2776 155.513 93.3023 155.93C104.327 156.346 94.295 160.894 88 163.5C86.1285 164.716 85 167.5 94.8335 168.958L99.5 170'
						stroke='#E4E3CC'
						stroke-width='2'
						stroke-linejoin='round'
					/>
					<path
						id='left-leg-decoration'
						d='M98.5666 220.441C94.589 226.255 89.8566 238.26 102.27 234.504C114.683 230.749 110.098 238.014 105.072 242.703C103.413 244.975 103.958 249.506 113.155 243.409C122.353 237.311 117.943 247.972 114.588 254.064C113.885 256.281 114.6 259.465 123.085 254.47L129.5 251.5'
						stroke='#E4E3CC'
						stroke-width='2'
						stroke-linejoin='round'
					/>
					<path
						id='right-leg-decoration'
						d='M206.356 208.135C199.781 205.261 186.46 202.993 191.431 215.222C196.402 227.45 188.214 224.264 182.778 220.03C180.2 218.797 175.344 220.397 182.609 228.707C189.874 237.018 178.03 234.785 171.2 232.63C168.753 232.391 165.365 233.865 171.386 241.674L176 248'
						stroke='#E4E3CC'
						stroke-width='2'
						stroke-linejoin='round'
					/>
					<path
						id='right-arm-decoration'
						d='M199 163.5C192.365 161.415 180.304 154.808 192.553 151.056C204.803 147.304 196.824 144.5 190.001 143.761C187.324 143 186.252 139.641 196.126 138.57C206 137.5 198.795 134.606 192.5 132C190.629 130.784 189 129 197.5 125.5L205 122'
						stroke='#E4E3CC'
						stroke-width='2'
						stroke-linejoin='round'
					/>
					<circle
						id='button-2'
						cx='150.948'
						cy='175.991'
						r='7.5'
						transform='rotate(-4.5 150.948 175.991)'
						fill='#DE3B3B'
					/>
					<circle
						id='button-1'
						cx='149.065'
						cy='152.065'
						r='7.5'
						transform='rotate(-4.5 149.065 152.065)'
						fill='#DE3B3B'
					/>
					<path
						id='tie'
						d='M132.467 138.928C130.42 134.449 129.669 127.595 131.316 122.468C131.783 120.063 141.459 124.195 146.523 126.918C150.004 123.399 160.168 116.39 161.757 120.564C163.845 126.049 164.196 137.711 161.466 137.902C159.412 138.046 152.383 137.034 146.94 132.883C143.998 136.331 134.242 142.813 132.467 138.928Z'
						fill='#25AA7A'
					/>
					<path
						id='mouth'
						d='M128.5 102.5C135.5 117 156.5 116.5 161 100.5'
						stroke='#D9D9D9'
						stroke-width='2'
						stroke-linejoin='round'
					/>
				</g>
			</g>
		</svg>
	);
};