import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BreakpointProvider } from 'react-socks'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BreakpointProvider>
			<App />
		</BreakpointProvider>
	</React.StrictMode>
)
