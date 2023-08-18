/* eslint-disable react/prop-types */
import './App.css'
import { Paper } from '@mui/material'

const MemoryCard = ({ theme, image }) => {
	return (
		<Paper
			elevation={1}
			sx={{
				backgroundColor: theme.outline.main,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '2px',
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
					width: '100px',
					height: '100px',
					objectFit: 'contain',
				}}
			/>
		</Paper>
	)
}

export default MemoryCard
