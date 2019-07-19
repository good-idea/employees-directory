import * as React from 'react'
import { BossModeProvider } from './BossMode'
import { Theme } from './Theme'
import { Provider as UrqlProvider, createClient } from 'urql'

interface ProvidersProps {
	children: React.ReactNode
}

console.log(process.env)
console.log(process.env.API_URL)

const client = createClient({
	url: process.env.API_URL,
})

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<UrqlProvider value={client}>
			<BossModeProvider>
				<Theme>{children}</Theme>
			</BossModeProvider>
		</UrqlProvider>
	)
}
