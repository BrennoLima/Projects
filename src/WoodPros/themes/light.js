import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#83371C',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
		button: {
			textTransform: 'none',
		},
	},
});
