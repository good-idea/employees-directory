import * as React from 'react'
import { merge } from 'lodash'
import { theme, bossTheme } from '../theme'

interface ThemeContextValue {
	/* */
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(
	undefined,
)

export const ThemeConsumer = ThemeContext.Consumer

export const useTheme = () => {
	const ctx = React.useContext(ThemeContext)
	if (!ctx)
		throw new Error('useThemeContext must be used within a ThemeProvider')
	return ctx
}

interface ThemeProps {
	children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProps) => {
	const value = {
		/* */
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
