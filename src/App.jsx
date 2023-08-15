import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Drawer, Avatar, Typography } from '@mui/material'
import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeIconOutlined from '@mui/icons-material/DarkModeOutlined'
import Apps from '@mui/icons-material/Apps'
import MemoryCard from './MemoryCard'
import { useState } from 'react'
import { lightTheme, darkTheme } from './themes'

function App() {
	const [dark, setDark] = useState(false)

	const theme = dark ? darkTheme : lightTheme
	const toggleTheme = () => {
		setDark(!dark)
		console.log(theme.primary.main)
	}
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container>
					<Drawer variant='permanent'>
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
								{dark ? (
									<Avatar
										animation='true'
										sx={{
											backgroundColor: theme.background.main,
											border: '1px solid #fff',
											color: theme.background.onBackground,
											'&:hover': {
												paddingBottom: '4px',
												backgroundColor: 'background.main',
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
											backgroundColor: theme.background.main,
											color: theme.background.onBackground,
											border: '.1px solid #000',
											'&:hover': {
												paddingBottom: '4px',
												backgroundColor: 'surface.variant',
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
						maxWidth='sm'
						elevation={4}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 2,
							flexWrap: 'wrap',
							auto: 'true',
							padding: '64px',
							backgroundColor: theme.surface.main,
							marginTop: '15vh',
						}}
					>
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
						<MemoryCard />
					</Container>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
