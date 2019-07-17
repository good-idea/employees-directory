import * as React from 'react'
import { BossModeProvider } from './BossMode'

interface ProvidersProps {
	children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
	return <BossModeProvider>{children}</BossModeProvider>
}
