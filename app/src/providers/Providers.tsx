import * as React from 'react'
import { BossModeProvider } from './BossMode'
import { ThemeProvider } from './Theme'
import { Provider as UrqlProvider, createClient } from 'urql'

interface ProvidersProps {
	children: React.ReactNode
}

const client = createClient({
	url: 'https://postlight-code-challenge.herokuapp.com/v1/graphql',
	fetchOptions: {
		headers: {
			'x-hasura-admin-secret': 'secret',
		},
	},
})

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<UrqlProvider value={client}>
			<BossModeProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</BossModeProvider>
		</UrqlProvider>
	)
}
