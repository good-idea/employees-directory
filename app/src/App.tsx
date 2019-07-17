import * as React from 'react'
import { Router } from '@reach/router'
import { Header } from './components/Header'
import { Home } from './views/Home'
import { Providers } from './providers/Providers'

export const App = () => {
	return (
		<Providers>
			<Header />
			<Router>
				<Home path="/" />
			</Router>
		</Providers>
	)
}
