/* eslint-disable react/prop-types */
import './App.css'
import { Paper, Typography, Box } from '@mui/material'

const MemoryCard = ({ theme, image, sortCards, name, artist }) => {
	return (
		<Paper
			elevation={1}
			onClick={sortCards}
			sx={{
				backgroundColor: theme.container.primary,
				display: 'flex',
				flexDirection: 'column',
				padding: '2px',
				width: '140px',
				cursor: 'pointer',
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
					padding: '4px',
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
	)
}

export default MemoryCard
