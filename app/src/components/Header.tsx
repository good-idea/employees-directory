import * as React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'
import { Placeholder } from './Placeholder'
import { Header1 } from './Text'

const Btn = styled.div`
	background-color: primary;
	color: primary;
	margin: 2;
`
export const Header = () => {
	return (
		<Placeholder label="Header">
			<Header1>FunCorp</Header1>
			<Link to="/">Dashboard</Link>
			<Link to="/employees">Employees</Link>
			<Link to="/departments">Departments</Link>
			<Link to="/offices">Offices</Link>
		</Placeholder>
	)
}
