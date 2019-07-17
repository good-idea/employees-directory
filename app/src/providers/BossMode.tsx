import * as React from 'react'

/**
 * BOSS MODE
 *
 * enables boss mode when the user types the secret password.
 * The user must type the password outside of any text input.
 */

const { useState, useEffect } = React

interface BossModeContextValue {
	enabled: boolean
	disable: () => void
}

const BossModeContext = React.createContext<BossModeContextValue | undefined>(
	undefined,
)

export const BossModeConsumer = BossModeContext.Consumer

export const useBossMode = () => {
	const ctx = React.useContext(BossModeContext)
	if (!ctx)
		throw new Error('useBossModeContext must be used within a BossModeProvider')
	return ctx
}

interface BossModeProps {
	children: React.ReactNode
}

/* matches text input elements */
const tagNameRegex = /INPUT|TEXTAREA/

/* the secret */
const SECRET = '/sudo'

export const BossModeProvider = ({ children }: BossModeProps) => {
	const [enabled, setEnabled] = useState(false)
	const [password, setPassword] = useState('')

	/* watch the user's keystrokes and turn on boss mode when they type the password */
	useEffect(() => {
		// @ts-ignore
		if (enabled) return // don't watch when in boss mode

		const handleKeyUp = (e) => {
			console.log(e.target.tagName)
			console.log(tagNameRegex.test(e.target.tagName))

			/* stop watching & reset if the target is a text input */
			if (tagNameRegex.test(e.target.tagName)) {
				setPassword('')
				return
			}

			const newPassword = `${password}${e.key}`
			/* reset the entered password if what has been types does not match */
			if (!SECRET.startsWith(newPassword)) {
				setPassword('')
				return
			}

			/* turn it on if the password matches */
			if (newPassword === SECRET) {
				setEnabled(true)
			}

			setPassword(newPassword)
		}

		document.addEventListener('keyup', handleKeyUp)
		return () => document.removeEventListener('keyup', handleKeyUp)
	}, [password])

	const disable = () => setEnabled(false)

	const value = {
		enabled,
		disable,
	}

	return (
		<BossModeContext.Provider value={value}>
			{children}
		</BossModeContext.Provider>
	)
}
