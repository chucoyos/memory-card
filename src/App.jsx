import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import {
	CssBaseline,
	Drawer,
	Avatar,
	Typography,
	Chip,
	Paper,
	AppBar,
	Toolbar,
	IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeIconOutlined from '@mui/icons-material/DarkModeOutlined'
import Apps from '@mui/icons-material/Apps'
import MemoryCard from './MemoryCard'
import { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from './themes'
import axios from 'axios'
import { v4 } from 'uuid'
import { Breakpoint } from 'react-socks'

function App() {
	const [themeMode, setThemeMode] = useState(lightTheme)

	const theme = themeMode

	const [cards, setCards] = useState([{}])
	const [deck, setDeck] = useState([{}])
	const [score, setScore] = useState(0)
	const [maxScore, setMaxScore] = useState(0)
	const [gameOver, setGameOver] = useState(false)
	const [selectedCards, setSelectedCards] = useState([])

	const toggleTheme = () => {
		setThemeMode(themeMode === lightTheme ? darkTheme : lightTheme)
	}

	useEffect(() => {
		axios
			.get('https://api.pokemontcg.io/v2/cards/?q=set.id:dv1')
			.then((res) => {
				setCards(res.data.data.splice(0, 14))
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	useEffect(() => {
		let cardId = 1
		setDeck(
			cards.map((card) => {
				card.id = cardId++
				return card
			})
		)
	}, [cards])

	const sortCards = (id) => {
		setDeck(
			deck.sort(() => {
				return 0.5 - Math.random()
			})
		)

		!selectedCards.includes(id)
			? setSelectedCards([...selectedCards, id]) & setScore(score + 1)
			: setGameOver(true)
		score > maxScore ? setMaxScore(score) : setMaxScore(maxScore)
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Breakpoint
					medium
					down
				>
					<Box marginBottom={8}>
						<AppBar
							sx={{
								backgroundColor: theme.primary.main,
								color: theme.primary.onPrimary,
							}}
						>
							<Toolbar>
								<IconButton
									size='large'
									edge='start'
									color='inherit'
									aria-label='menu'
									sx={{ mr: 2 }}
								>
									<MenuIcon />
								</IconButton>
								{theme === lightTheme ? (
									<IconButton
										size='large'
										color='inherit'
										aria-label='dark mode'
										sx={{ mr: 2 }}
										onClick={toggleTheme}
										edge='end'
									>
										<LightModeIconOutlined fontSize='small' />
									</IconButton>
								) : (
									<IconButton
										size='large'
										color='inherit'
										aria-label='dark mode'
										sx={{ mr: 2 }}
										onClick={toggleTheme}
									>
										<DarkModeIconOutlined fontSize='small' />
									</IconButton>
								)}
							</Toolbar>
						</AppBar>
					</Box>
				</Breakpoint>
				<Container
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Breakpoint
						large
						up
					>
						<Drawer variant='permanent'>
							<Box
								width={70}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									gap: 2,
									marginTop: 2,
								}}
							>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
									}}
								>
									<Apps />

									<Typography variant='caption'>Games</Typography>
								</Box>
								<Box onClick={toggleTheme}>
									{theme === lightTheme ? (
										<Avatar
											animation='true'
											sx={{
												backgroundColor: theme.background.main,
												border: `1px solid ${theme.outline.main}`,
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
												border: `1px solid ${theme.outline.main}`,
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
							</Box>
						</Drawer>
					</Breakpoint>

					<Container
						maxWidth='lg'
						sx={{
							marginTop: '24px',
							marginBottom: '24px',
							marginLeft: '0',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 2,
							flexWrap: 'wrap',
							padding: '32px',
							backgroundColor: theme.surface.variant,
							borderRadius: '16px',
							'@media (max-width: 800px)': { padding: '8px' },
						}}
					>
						<Container
							sx={{
								'@media (max-width: 800px)': { padding: '0' },
							}}
						>
							<Paper
								sx={{
									padding: '16px',
									borderRadius: '16px',
									bgcolor: theme.container.main,
									'@media (max-width: 700px)': {
										width: '100%',
										padding: '16px',
									},
								}}
							>
								<Typography
									variant='h4'
									component='h1'
									sx={{
										color: theme.primary.main,
										'@media (max-width: 800px)': { fontSize: '24px' },
									}}
								>
									Pokemon Memory Game
								</Typography>

								<Typography
									variant='h6'
									component='h2'
									sx={{
										color: theme.secondary.main,
										'@media (max-width: 800px)': { fontSize: '16px' },
									}}
								>
									Try to beat your high score by clicking on each card only
									once!
								</Typography>
								<Chip
									label={`Score: ${score}`}
									sx={{
										marginRight: '8px',
										bgcolor: theme.primary.main,
										color: theme.primary.onPrimary,
									}}
								/>
								<Chip
									label={`Max Score: ${maxScore}`}
									variant='outlined'
								/>
							</Paper>
						</Container>
						{deck === null || gameOver ? (
							<Container
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Chip
									clickable
									label={`Tray Again!`}
									onClick={() => {
										setGameOver(false)
										setScore(0)
										setSelectedCards([])
									}}
									sx={{
										backgroundColor: theme.primary.main,
										color: theme.primary.onPrimary,
										fontWeight: 'bold',
										padding: '16px 24px',
										'&:hover': {
											color: theme.primary.main,
											backgroundColor: theme.surface.main,
										},
									}}
								/>
							</Container>
						) : (
							deck.map((deck) => {
								return (
									<MemoryCard
										id={deck.id}
										name={deck.name}
										key={v4()}
										image={`https://images.pokemontcg.io/dv1/${deck.id}.png`}
										theme={theme}
										sortCards={() => sortCards(deck.id)}
										artist={deck.artist}
									/>
								)
							})
						)}
					</Container>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
