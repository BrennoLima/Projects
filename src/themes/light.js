import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		text: {
			primary: '#002661',
			secondary: '#555555',
		},
		background: {
			paper: '#f6fbff',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
