import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#7e35aa',
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
