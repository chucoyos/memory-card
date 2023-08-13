import './App.css'
// import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Button, CssBaseline, Paper, Drawer } from '@mui/material'
import { useState } from 'react'

function App() {
	const [customTheme, setCustomTheme] = useState(false)
	const theme = createTheme({
		palette: {
			mode: customTheme ? 'dark' : 'light',
		},
	})
	const toggleTheme = () => {
		setCustomTheme(!customTheme)
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Drawer
					variant='permanent'
					anchor='right'
				></Drawer>

				<Container
					maxWidth='lg'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					<Paper>
						<Box>
							<Button
								variant='contained'
								onClick={() => {
									toggleTheme()
								}}
							>
								qwewqe
							</Button>
						</Box>
					</Paper>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
