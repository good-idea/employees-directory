import * as React from 'react'

/**
 * BOSS MODE
 *
 * enables boss mode when the user types the secret password.
 * The user must type the password outside of any text input.
 */

const { useState, useEffect } = React

interface BossModeContextValue {
	bossMode: boolean
	disable: () => void
	enable: () => void
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

/**
 * KeystrokeWatcher
 *
 * Watches the user's keystrokes and turn on boss mode when they type
 * the password.
 *
 * In a standalone component so the provider doesn't re-render with each keystroke.
 **/

/* matches text input elements */
const tagNameRegex = /INPUT|TEXTAREA/

/* the secret */
const SECRET = '/sudo'

const KeystrokeWatcher = ({ bossMode, enable }: BossModeContextValue) => {
	const [password, setPassword] = useState('')

	useEffect(() => {
		// @ts-ignore
		if (bossMode) return // don't watch when in boss mode

		const handleKeyUp = (e) => {
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
				console.log('ENTER BOSS MODE')
				enable()
			}

			setPassword(newPassword)
		}

		document.addEventListener('keyup', handleKeyUp)
		return () => document.removeEventListener('keyup', handleKeyUp)
	}, [password])

	return null
}

/**
 * Provider
 */

export const BossModeProvider = ({ children }: BossModeProps) => {
	const [enabled, setEnabled] = useState(false)
	const disable = () => setEnabled(false)
	const enable = () => setEnabled(true)

	const value = {
		enable,
		disable,
		bossMode: enabled,
	}

	return (
		<BossModeContext.Provider value={value}>
			<KeystrokeWatcher {...value} />
			{children}
		</BossModeContext.Provider>
	)
}
