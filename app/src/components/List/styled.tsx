import styled, { css } from '@xstyled/styled-components'

export const ListWrapper = styled.div`
	background-color: body.3;
	border-radius: 3 3 0 0;
`

export const ListHeader = styled.div`
	padding: 3;
`

export const ListContents = styled.ul``

export const ListItem = styled.li`
	${({ columns }) => css`
		display: grid;
		grid-template-columns: repeat(${columns || 4}, 1fr);
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

		& + & {
			margin-top: -1px;
		}
	`}
`
