import styled, { css, DefaultTheme } from '@xstyled/styled-components'

export interface TextStyleProps {
	theme: DefaultTheme
	align?: 'left' | 'center' | 'right'
	weight?: 'xlight' | 'light' | 'book' | 'normal' | 'semi' | 'strong'
	color?: string
	family?: string
	transform?: string
}

const commonHeaderStyles = ({
	theme,
	align,
	transform,
	weight,
	color,
	family,
}: TextStyleProps) => css`
	font-weight: 2;
	font-family: ${family || 'sans'};
	color: ${color || 'inherit'};
	text-align: ${align || 'inherit'};
	text-transform: ${transform || 'auto'};
	margin: 0.3em 0;
	letter-spacing: 0.03em;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`

export const Header1 = styled.h2`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)}
		font-size: 4;
		font-family: display;
	`};
`

export const Header2 = styled.h2`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: 3;
	`};
`

export const Header3 = styled.h3`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: 2;
	`};
`

export const Header4 = styled.h4`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: 1;
	`};
`

export const Header5 = styled.h5`
	${(props: TextStyleProps) => css`
		${commonHeaderStyles(props)};
		font-size: 0;
	`};
`

export const P = styled.p`
	${({ theme, align }: TextStyleProps) => css`
		text-align: ${align || 'inherit'};
		margin: 0.5em 0;
		font-size: 1;

		& + ${P} {
			margin-top: 1em;
		}

		&:first-child {
			margin-top: 0;
		}

		&:last-child {
			margin-bottom: 0;
		}
	`};
`

export const TextAnchor = styled.a`
	${({ theme }) => `
		color: primary.0; 
	`};
`

export const BlockQuote = styled.blockquote``

const listStyles = css`
	${({ theme }) => `
		margin: 1 0;
		padding-left: 2em;
	`};
`

export const Ol = styled.ol`
	${listStyles};
`

export const Ul = styled.ul`
	${listStyles};
`

export const Li = styled.li`
	& > ${Ol}, & > ${Ul} {
		margin: 0;
	}
`
