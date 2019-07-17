import * as React from 'react'
import { BossModeProvider } from './BossMode'
import { ThemeProvider } from './Theme'

interface ProvidersProps {
	children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<BossModeProvider>
			<ThemeProvider>{children}</ThemeProvider>
		</BossModeProvider>
	)
}
