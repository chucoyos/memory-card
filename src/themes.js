import { createTheme } from '@mui/material/styles'
const lightTheme = createTheme({
	palette: {
		mode: 'light',
	},
	primary: {
		main: '#6f43c0',
		onPrimary: '#ffffff',
	},
	container: {
		primary: '#ebddff',
		secondary: '#e9def8',
	},
	surface: {
		main: '#fffbff',
		variant: '#e7e0eb',
	},
	background: {
		main: '#fffbff',
		onBackground: '#1d1b1e',
	},
})

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
	primary: {
		main: '#d3bbff',
		onPrimary: '#3f008d',
	},
	container: {
		primary: '#5727a7',
		secondary: '#4b4358',
	},
	surface: {
		main: '#1d1b1e',
		variant: '#49454e',
	},
	background: {
		main: '#1d1b1e',
		onBackground: '#e6e1e6',
	},
})

export { lightTheme, darkTheme }
