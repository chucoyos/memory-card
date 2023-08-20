/* eslint-disable react/prop-types */
import Breakpoint from 'react-socks'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIconOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeIconOutlined from '@mui/icons-material/DarkModeOutlined'
import { lightTheme } from '../utils/themes'

const NavBar = ({ theme, toggleTheme }) => {
	return (
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
	)
}
export default NavBar
