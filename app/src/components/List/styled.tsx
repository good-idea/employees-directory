import styled, { css, keyframes } from '@xstyled/styled-components'
import { Button } from 'Components/Button'

export const ListWrapper = styled.div`
	background-color: body.3;
	border-radius: 3 3 0 0;
`

export const ListHeader = styled.div`
	padding: 3;
`

export const ListContents = styled.ul``

interface WithColumnCount {
	columnCount: number
}
export const ListColumnHeaders = styled.div`
	${({ columnCount }: WithColumnCount) => css`
		display: grid;
		grid-template-columns: repeat(${columnCount}, 1fr);
		grid-gap: 2;
		text-align: left;
		padding: 1 3;
	`}
`

interface WithActive {
	active: boolean
}

export const ColumnHeader = styled.div`
	${({ active }: WithActive) => css`
		& > button {
			background: none;
			border: none;
			display: inline-block;
			text-align: left;
			font-family: sans;
			font-weight: 2;
			font-size: 1;
			padding: 0;
			margin: 0;
			outline: none;
			cursor: pointer;

			color: ${active ? 'text.0' : 'text.2'};
			&:hover {
				color: text.0;
			}
		}
	`}
`

interface ListItemProps {
	columnCount: number
	isBurning?: boolean
	hidden?: boolean
}

export const ListItem = styled.li`
	${({ columnCount, isBurning, hidden }: ListItemProps) => css`
		position: relative;
		display: ${hidden ? 'none' : 'grid'};
		grid-template-columns: repeat(${columnCount}, 1fr);
		grid-gap: 2;
		padding: 3;
		background-color: body.4;
		border: 1px solid;
		border-left-width: 0;
		border-right-width: 0;
		border-color: primary.4;

		& h4 {
			display: inline;
			margin-top: 0;
			margin-bottom: 0;
		}

		& + & {
			margin-top: -1px;
		}

		&:hover > ${FireButton} {
			display: block;
		}

		${isBurning
			? css`
					transition: 5s;
					background-color: black;
					animation: ${fadeAway} 5s;
					animation-fill-mode: forwards;

					h4 {
						position: relative;
						transition: 3s;
						color: black;
					}

					${FireButton} {
						display: block;

						animation: ${shake} 0.5s linear infinite;
						top: -2px;
						transition: opacity 5s, top 3s;

						&[disabled] {
							opacity: 0;
						}
					}
			  `
			: css`
					&:hover {
						background-color: body.5;
					}
			  `}
	`}
`

export const FireButton = styled(Button)`
	font-family: display;
	display: none;
	background-color: error.0;
	position: absolute;
	right: 10px;
	top: 5px;
	border-color: error.2;
	color: white;
	text-transform: uppercase;
`

const fadeAway = keyframes`
0%, 85% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`

/* via https://csshake.surge.sh/csshake.css */
const shake = keyframes`
  2% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg); }
  4% {
    transform: translate(2.5px, 1.5px) rotate(1.5deg); }
  6% {
    transform: translate(2.5px, 0.5px) rotate(0.5deg); }
  8% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg); }
  10% {
    transform: translate(-0.5px, -1.5px) rotate(1.5deg); }
  12% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg); }
  14% {
    transform: translate(-1.5px, 1.5px) rotate(1.5deg); }
  16% {
    transform: translate(2.5px, 1.5px) rotate(1.5deg); }
  18% {
    transform: translate(0.5px, -0.5px) rotate(-0.5deg); }
  20% {
    transform: translate(0.5px, 1.5px) rotate(0.5deg); }
  22% {
    transform: translate(2.5px, -0.5px) rotate(0.5deg); }
  24% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg); }
  26% {
    transform: translate(-1.5px, 0.5px) rotate(1.5deg); }
  28% {
    transform: translate(0.5px, 0.5px) rotate(-0.5deg); }
  30% {
    transform: translate(1.5px, 1.5px) rotate(1.5deg); }
  32% {
    transform: translate(0.5px, 0.5px) rotate(0.5deg); }
  34% {
    transform: translate(1.5px, -1.5px) rotate(-0.5deg); }
  36% {
    transform: translate(1.5px, 2.5px) rotate(1.5deg); }
  38% {
    transform: translate(-1.5px, 0.5px) rotate(-0.5deg); }
  40% {
    transform: translate(0.5px, -0.5px) rotate(1.5deg); }
  42% {
    transform: translate(2.5px, -1.5px) rotate(-0.5deg); }
  44% {
    transform: translate(-1.5px, -1.5px) rotate(0.5deg); }
  46% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg); }
  48% {
    transform: translate(0.5px, -0.5px) rotate(-0.5deg); }
  50% {
    transform: translate(0.5px, 1.5px) rotate(0.5deg); }
  52% {
    transform: translate(0.5px, -0.5px) rotate(0.5deg); }
  54% {
    transform: translate(2.5px, 0.5px) rotate(1.5deg); }
  56% {
    transform: translate(-1.5px, -1.5px) rotate(0.5deg); }
  58% {
    transform: translate(-1.5px, -0.5px) rotate(-0.5deg); }
  60% {
    transform: translate(0.5px, -1.5px) rotate(0.5deg); }
  62% {
    transform: translate(1.5px, 1.5px) rotate(0.5deg); }
  64% {
    transform: translate(0.5px, 2.5px) rotate(0.5deg); }
  66% {
    transform: translate(0.5px, 0.5px) rotate(1.5deg); }
  68% {
    transform: translate(-1.5px, 2.5px) rotate(0.5deg); }
  70% {
    transform: translate(-1.5px, 1.5px) rotate(1.5deg); }
  72% {
    transform: translate(-0.5px, 2.5px) rotate(1.5deg); }
  74% {
    transform: translate(1.5px, 2.5px) rotate(-0.5deg); }
  76% {
    transform: translate(-0.5px, 0.5px) rotate(1.5deg); }
  78% {
    transform: translate(1.5px, -1.5px) rotate(0.5deg); }
  80% {
    transform: translate(-0.5px, 2.5px) rotate(0.5deg); }
  82% {
    transform: translate(-1.5px, -1.5px) rotate(1.5deg); }
  84% {
    transform: translate(1.5px, 1.5px) rotate(0.5deg); }
  86% {
    transform: translate(0.5px, -0.5px) rotate(-0.5deg); }
  88% {
    transform: translate(-1.5px, 2.5px) rotate(-0.5deg); }
  90% {
    transform: translate(1.5px, 0.5px) rotate(0.5deg); }
  92% {
    transform: translate(0.5px, -1.5px) rotate(0.5deg); }
  94% {
    transform: translate(0.5px, -1.5px) rotate(1.5deg); }
  96% {
    transform: translate(0.5px, 1.5px) rotate(-0.5deg); }
  98% {
    transform: translate(-0.5px, -0.5px) rotate(0.5deg); }
  0%, 100% {
    transform: translate(0, 0) rotate(0); }
`
