import * as React from 'react'
import styled, { keyframes, css } from '@xstyled/styled-components'

const Wrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform: translateZ(1);
	pointer-events: none;
`

interface BrimstoneProps {
	/* */
	flameCount?: number
}

export const Brimstone = ({ flameCount }: BrimstoneProps) => {
	console.log('brimming')
	const flames = new Array(flameCount || 20).fill('')
	console.log(flames)

	return (
		<Wrapper>
			{flames.map((flame, index) => (
				<Flame key={index} />
			))}
		</Wrapper>
	)
}

/** 🔥 🔥 🔥 **/

const Flame = () => {
	const [started, setStarted] = React.useState(false)
	/* random left position between 1-100 */
	const left = Math.random() * 100
	/* random drift from -30px - 30px */
	const drift = Math.random() * 60 - 30
	/* random lift from 40 to 150px */
	const lift = Math.random() * 110 + 40
	/* random delay from 0 to 4000ms */
	const delay = Math.random() * 4000

	const emojiChance = Math.random()
	const emoji =
		/* 5% chance of being a skull */
		emojiChance < 0.05
			? '💀'
			: /* 5% chance of being a ghost */
			emojiChance < 0.1
			? '👻'
			: '🔥'

	React.useEffect(() => {
		setStarted(true)
	}, [])

	return (
		<FlameWrapper left={left}>
			<FlameSpan delay={delay} drift={drift} lift={lift} started={started}>
				{emoji}
			</FlameSpan>
		</FlameWrapper>
	)
}

interface FlameWrapperProps {
	left: number
}

const FlameWrapper = styled.div`
	${({ left }: FlameWrapperProps) => css`
		position: absolute;
		top: 100%;
		left: ${left}%;
	`}
`

interface FlameSpanProps {
	delay: number
	drift: number
	lift: number
	started: boolean
}

const FlameSpan = styled.span`
	${({ delay, drift, lift, started }: FlameSpanProps) => css`
		position: absolute;
		transition: opacity 0.5s, 3s cubic-bezier(0.71, 0.28, 0.86, 0.58);
		transition: opacity 0.5s, 3s ease-in;
		opacity: 0;
		transition-delay: ${delay}ms;
		transform: ${started ? `translate(${drift}px, -${lift}px)` : 'none'};
		animation: ${fadeInOut} 3s;
		animation-delay: ${delay}ms;
	`}
`

const fadeInOut = keyframes`
0%, 100% {
  opacity: 0;
}
25%, 85% {
  opacity: 1;
}
`
