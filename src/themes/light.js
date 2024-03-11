import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#000',
			light: '#878787',
		},
		background: {
			paper: '#fff9ef',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
