import { createTheme } from '@mui/material/styles'
const lightTheme = createTheme({
	palette: {
		mode: 'light',
	},
	primary: {
		main: '#6f43c0',
		onPrimary: '#ffffff',
	},
	secondary: {
		main: '#635b70',
	},
	tertiary: {
		main: '#7e525d',
	},
	container: {
		primary: '#ebddff',
		secondary: '#e9def8',
	},
	onContainer: {
		primary: '#250059',
	},
	surface: {
		main: '#fffbff',
		variant: '#e7e0eb',
	},
	outline: {
		main: '#7a757f',
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
	secondary: {
		main: '#cdc2db',
	},
	tertiary: {
		main: '#f0b7c5',
	},
	container: {
		primary: '#5727a7',
		secondary: '#4b4358',
	},
	onContainer: {
		primary: '#ebddff',
	},
	surface: {
		main: '#1d1b1e',
		variant: '#49454e',
	},
	outline: {
		main: '#948f99',
	},
	background: {
		main: '#1d1b1e',
		onBackground: '#e6e1e6',
	},
})

export { lightTheme, darkTheme }
