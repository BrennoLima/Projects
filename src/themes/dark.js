import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		// primary: {
		// 	main: '#ffd58f',
		// 	light: '#FFF',
		// },
		text: {
			primary: '#ffd58f',
			secondary: '#FFF',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
