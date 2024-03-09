import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#e5383b',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
