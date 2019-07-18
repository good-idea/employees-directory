import * as React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from '@reach/router'
import { Placeholder } from './Placeholder'
import { Header1, Header3 } from './Text'

const Wrapper = styled.nav`
	height: 60px;
	width: 100%;
	padding: 0 2;
	background-color: primary.0;
	color: offset.0;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	& > ${Header1} {
		margin: 0 3 0 0;
	}
`

const NavLinkWrapper = styled(Link)`
	height: 100%;
	transition: 0.2s;
	background-color: transparent;
	padding: 0 2;
	display: flex;
	align-items: center;
	color: inherit;
	text-decoration: none;

	&:hover {
		background-color: primary.1;
		color: offset.1;
	}
`

interface NavLinkProps {
	to: string
	label: string
}

const NavLink = ({ to, label }: NavLinkProps) => (
	<NavLinkWrapper to={to}>
		<Header3>{label}</Header3>
	</NavLinkWrapper>
)

export const Header = () => {
	return (
		<Wrapper>
			<Header1>HappyCorp</Header1>
			<NavLink to="/" label="Dashboard" />
			<NavLink to="/employees" label="Employees" />
			<NavLink to="/departments" label="Departments" />
			<NavLink to="/offices" label="Offices" />
		</Wrapper>
	)
}
