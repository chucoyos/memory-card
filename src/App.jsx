import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Drawer, Avatar } from '@mui/material'
import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeIconOutlined from '@mui/icons-material/DarkModeOutlined'
import { useState } from 'react'
import { DarkMode } from '@mui/icons-material'

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
				<Drawer variant='permanent'>
					{' '}
					<Box
						width={60}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 2,
							marginTop: 2,
						}}
					>
						<Box>
							{customTheme ? (
								<Avatar
									sx={{
										backgroundColor: 'inherit',
										color: 'inherit',
										border: '1px solid #fff',
									}}
									onClick={toggleTheme}
								>
									<LightModeIconOutlined fontSize='small' />
								</Avatar>
							) : (
								<Avatar
									sx={{
										backgroundColor: 'inherit',
										color: 'inherit',
										border: '.1px solid #000',
									}}
									onClick={toggleTheme}
								>
									<DarkModeIconOutlined fontSize='small' />
								</Avatar>
							)}
						</Box>
						<Box>
							<DarkMode onClick={toggleTheme} />
						</Box>
					</Box>
				</Drawer>

				<Container
					maxWidth='lg'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				></Container>
			</ThemeProvider>
		</>
	)
}

export default App
