import './App.css'
import { Paper } from '@mui/material'
import { lightTheme, darkTheme } from './themes'

const MemoryCard = () => {
	return (
		<Paper
			elevation={1}
			sx={{
				backgroundColor: 'primary.main',
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
				src='https://picsum.photos/id/13/70/120'
				alt='DigitalCrafts logo'
			/>
		</Paper>
	)
}

export default MemoryCard
