import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Drawer, Avatar, Typography } from '@mui/material'
import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeIconOutlined from '@mui/icons-material/DarkModeOutlined'
import Apps from '@mui/icons-material/Apps'
import { useState } from 'react'

function App() {
	const [customTheme, setCustomTheme] = useState(true)
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
				<Container>
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
							<Box onClick={toggleTheme}>
								{customTheme ? (
									<Avatar
										animation='true'
										sx={{
											backgroundColor: 'inherit',
											color: 'inherit',
											border: '1px solid #fff',
											'&:hover': {
												paddingBottom: '4px',
												backgroundColor: 'grey.800',
												rotate: '360deg',
												transition: 'all 0.5s ease-in-out',
											},
										}}
									>
										<LightModeIconOutlined fontSize='small' />
									</Avatar>
								) : (
									<Avatar
										sx={{
											backgroundColor: 'inherit',
											color: 'inherit',
											border: '.1px solid #000',
											'&:hover': {
												paddingBottom: '4px',
												backgroundColor: 'grey.200',
												rotate: '360deg',
												transition: 'all 0.5s ease-in-out',
											},
										}}
									>
										<DarkModeIconOutlined fontSize='small' />
									</Avatar>
								)}
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<Apps />
								<Typography variant='caption'>Apps</Typography>
							</Box>
						</Box>
					</Drawer>

					<Container
						maxWidth='lg'
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography variant='h1'>Hello World</Typography>
					</Container>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
