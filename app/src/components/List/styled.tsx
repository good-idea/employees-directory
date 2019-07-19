import styled, { css } from '@xstyled/styled-components'
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

interface WithColumnCount {
	columnCount: number
}

export const ListItem = styled.li`
	${({ columnCount }: WithColumnCount) => css`
		position: relative;
		display: grid;
		grid-template-columns: repeat(${columnCount}, 1fr);
		grid-gap: 2;
		padding: 3;
		background-color: body.4;
		border: 1px solid;
		border-left-width: 0;
		border-right-width: 0;
		border-color: primary.4;

		&:hover {
			background-color: body.5;
		}

		& > * + * {
			margin: 0;
		}

		& + & {
			margin-top: -1px;
		}

		&:hover > ${FireButton} {
			display: block;
		}
	`}
`

export const FireButton = styled(Button)`
	display: none;
	background-color: error.0;
	position: absolute;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	border-color: error.2;
	color: white;
	text-transform: uppercase;
`
