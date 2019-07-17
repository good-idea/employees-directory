import * as React from 'react'
import { Placeholder } from '../components/Placeholder'

interface HomeProps {
	path: string
}

export const Home = (props: HomeProps) => {
	return (
		<Placeholder label="home view">
			<input />
		</Placeholder>
	)
}
