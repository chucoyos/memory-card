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
					'@media (min-width: 1250px)': {
						display: 'none',
					},
				}}
			>
				<CircularProgress color='success' />
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#f5f5f5',
					maxWidth: '135px',
					'@media (max-width: 1250px)': {
						display: 'none',
					},
				}}
			>
				<Skeleton
					variant='circular'
					width={30}
					height={30}
					style={{
						marginBottom: 6,
					}}
				/>
				<Skeleton
					animation='wave'
					variant='rectangular'
					width='135px'
					height={180}
					style={{
						marginBottom: 6,
						borderRadius: '4px',
					}}
				/>
				<Skeleton
					animation='wave'
					height={10}
					width='110px'
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
