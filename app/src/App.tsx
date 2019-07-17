import * as React from 'react'
import { Router } from '@reach/router'
import { Header } from './components/Header'
import { Providers } from './providers/Providers'
import { Home } from './views/Home'
import { Employees } from './views/Employees'
import { Offices } from './views/Offices'
import { Departments } from './views/Departments'

export const App = () => {
	return (
		<Providers>
			<Header />
			<Router>
				<Home path="/" />
				<Employees path="/employees" />
				<Offices path="/offices" />
				<Departments path="/departments" />
			</Router>
		</Providers>
	)
}
