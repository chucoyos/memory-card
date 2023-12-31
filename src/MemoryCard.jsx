/* eslint-disable react/prop-types */
import './App.css'
import { Paper, Typography, Box, Slide } from '@mui/material'

const MemoryCard = ({ theme, image, dealCards, name, artist }) => {
	return (
		<Slide
			in={true}
			timeout={500}
			direction='up'
		>
			<Paper
				elevation={4}
				onClick={dealCards}
				sx={{
					backgroundColor: theme.container.primary,
					color: theme.onContainer.primary,
					display: 'flex',
					flexDirection: 'column',
					padding: '2px',
					width: '140px',
					cursor: 'pointer',
					'@media (max-width: 800px)': {
						width: '80px',
						padding: '0',
					},

					'&:hover': {
						transform: 'scale(1.1)',
						transition: 'all 0.2s ease-in-out',
					},
				}}
			>
				<Box>
					<img
						src={image}
						alt='pokemon card'
						style={{
							objectFit: 'contain',
							width: '100%',
						}}
					/>
				</Box>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'start',
						padding: '2px',
						'@media (max-width: 800px)': {
							display: 'none',
						},
					}}
				>
					<Typography
						variant='subtitle1'
						component='h2'
						marginRight='auto'
					>
						{name}
					</Typography>
					<Typography
						variant='body2'
						component='p'
					>
						{artist}
					</Typography>
				</Box>
			</Paper>
		</Slide>
	)
}

export default MemoryCard
