import * as React from 'react'
import { Link } from '@reach/router'
import { Placeholder } from './Placeholder'

export const Header = () => {
	return (
		<Placeholder label="Header">
			<Link to="/">Dashboard</Link>
			<Link to="/employees">Employees</Link>
			<Link to="/departments">Departments</Link>
			<Link to="/offices">Offices</Link>
		</Placeholder>
	)
}
