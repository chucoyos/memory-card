import './App.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Drawer, Avatar, Typography } from '@mui/material'
import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeIconOutlined from '@mui/icons-material/DarkModeOutlined'
import Apps from '@mui/icons-material/Apps'
import MemoryCard from './MemoryCard'
import { useState, useEffect } from 'react'
import { lightTheme, darkTheme } from './themes'
import axios from 'axios'
import { v4 } from 'uuid'

function App() {
	const [themeMode, setThemeMode] = useState(lightTheme)
	const toggleTheme = () => {
		setThemeMode(themeMode === lightTheme ? darkTheme : lightTheme)
	}
	const theme = themeMode

	const [cards, setCards] = useState([{}])
	const [deck, setDeck] = useState([{}])
	const [clickCount, setClickCount] = useState(0)
	const [gameOver, setGameOver] = useState(false)

	useEffect(() => {
		axios
			.get('https://api.pokemontcg.io/v2/cards/')

			.then((res) => {
				setCards(res.data.data.splice(0, 10))
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

	const [selectedCards, setSelectedCards] = useState([])
	const sortCards = (id) => {
		setDeck(
			deck.sort(() => {
				return 0.5 - Math.random()
			})
		)
		setClickCount(clickCount + 1),
			!selectedCards.includes(id)
				? setSelectedCards([...selectedCards, id])
				: setGameOver(true)
		gameOver ? console.log('game over') : console.log(selectedCards)
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
						</Box>
					</Drawer>

					<Container
						maxWidth='md'
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
							marginTop: '10vh',
						}}
					>
						{deck.length === 0 ? <h1>Loading...</h1> : null}
						{deck.map((deck) => {
							return (
								<MemoryCard
									id={deck.id}
									key={v4()}
									image={`https://images.pokemontcg.io/dp3/${deck.id}.png`}
									theme={theme}
									sortCards={() => sortCards(deck.id)}
								/>
							)
						})}
					</Container>
				</Container>
			</ThemeProvider>
		</>
	)
}

export default App
