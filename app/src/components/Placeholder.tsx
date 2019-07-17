import * as React from 'react'

/**
 *  A generic placeholder component used for scaffolding out routes & views
 */

const wrapperStyles = {
	display: 'block',
	padding: '24px 10px',
	margin: '10px',
	border: '1px dashed lightblue',
	position: 'relative',
	boxSizing: 'border-box',
	minHeight: '60px',
}

const codeWrapperStyles = {
	backgroundColor: 'beige',
	padding: '15px',
}

const codeStyles = {
	padding: '5px',
	fontSize: '12px',
}

const labelStyles = {
	fontFamily: 'monospace',
	fontWeight: 400,
	backgroundColor: '#5eb0ca',
	position: 'absolute',
	top: '-1px',
	left: '-1px',
	margin: 0,
	padding: '1px 5px',
	color: 'rgba(255, 255, 255, 0.8)',
}

const descriptionStyles = {
	fontFamily: 'monospace',
	fontWeight: 400,
	backgroundColor: 'rgb(225, 245, 252)',
	color: '#5eb0ca',
	margin: 0,
	padding: '1px 5px',
}

interface Props {
	label: string
	description?: string
	children?: React.ReactNode
}

export const Placeholder = ({
	label,
	description,
	children,
	...props
}: Props) => (
	<div style={wrapperStyles}>
		{label && <h4 style={labelStyles}>{label}</h4>}
		{description && <h4 style={descriptionStyles}>{description}</h4>}
		{props && Object.keys(props).length ? (
			<div style={codeWrapperStyles}>
				<summary>Props:</summary>
				<pre style={codeStyles}>{JSON.stringify(props, null, 2)}</pre>
			</div>
		) : null}
		{children ? children : null}
	</div>
)
