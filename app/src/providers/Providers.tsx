import * as React from 'react'
import { BossModeProvider } from './BossMode'
import { Theme } from './Theme'
import { Provider as UrqlProvider, createClient } from 'urql'

interface ProvidersProps {
	children: React.ReactNode
}

const client = createClient({
	url: 'http://localhost:4000/graphql',
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
