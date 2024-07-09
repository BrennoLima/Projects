import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#5f2b7f',
			light: '#edddf6',
		},
		text: {
			primary: '#482161',
			secondary: '#555555',
		},
		background: {
			paper: '#faf2ff',
			default: '#FFF',
		},
	},
	typography: {
		fontFamily: "'Bitter', 'sans-serif'",
	},
});
