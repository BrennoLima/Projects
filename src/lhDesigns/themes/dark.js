import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		text: {
			primary: '#ffd58f',
			secondary: '#FFF',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
