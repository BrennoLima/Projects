import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#83371C',
		},
		text: {
			primary: '#CD6C29',
			secondary: '#555555',
		},
		background: {
			paper: '#f6fbff',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
		button: {
			textTransform: 'none',
		},
	},
});
