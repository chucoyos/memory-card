import Skeleton from '@mui/material/Skeleton'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'
const CardSkeleton = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			<Box
				sx={{
					'@media (min-width: 800px)': {
						display: 'none',
					},
				}}
			>
				<CircularProgress color='success' />
			</Box>
			<Box
				sx={{
					'@media (max-width: 800px)': {
						display: 'none',
					},
				}}
			>
				<Skeleton
					animation='wave'
					variant='rectangular'
					width={140}
					height={180}
					style={{
						marginBottom: 6,
						borderRadius: '4px',
					}}
				/>
				<Skeleton
					animation='wave'
					height={10}
					width='80%'
				/>
				<Skeleton
					animation='wave'
					height={10}
					width='40%'
				/>
			</Box>
		</Container>
	)
}
export default CardSkeleton
