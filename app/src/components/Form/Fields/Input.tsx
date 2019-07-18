import * as React from 'react'
import { Field, FieldProps as FormikFieldProps } from 'formik'
import { FieldProps } from './types'
import { FieldWrapper, Label } from './styled'

interface InputProps extends FieldProps {
	placeholder?: string
	type?: string
	required?: boolean
}

export function Input<FormValues>({
	label,
	name,
	placeholder,
	type,
	required,
}: InputProps) {
	return (
		<Field
			name={name}
			render={({ field, form }: FormikFieldProps<FormValues>) => (
				<FieldWrapper>
					<Label>{label}</Label>
					<input
						type={type || 'text'}
						required={required}
						{...field}
						placeholder={placeholder}
					/>
				</FieldWrapper>
			)}
		/>
	)
}
