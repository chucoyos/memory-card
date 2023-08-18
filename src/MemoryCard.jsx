/* eslint-disable react/prop-types */
import './App.css'
import { Paper } from '@mui/material'

const MemoryCard = ({ theme, image, sortCards }) => {
	return (
		<Paper
			elevation={1}
			onClick={sortCards}
			sx={{
				backgroundColor: theme.outline.main,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '2px',
				width: '140px',
				'&:hover': {
					transform: 'scale(1.1)',
					transition: 'all 0.2s ease-in-out',
				},
			}}
		>
			<img
				src={image}
				alt='pokemon card'
				style={{
					objectFit: 'contain',
					width: '100%',
				}}
			/>
		</Paper>
	)
}

export default MemoryCard
