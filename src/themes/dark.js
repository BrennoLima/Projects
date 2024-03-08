import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		text: {
			primary: '#FFF',
		},
	},
	typography: {
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
