import * as React from 'react'
import { Field, FieldProps as FormikFieldProps } from 'formik'
import { FieldProps } from './types'
import { FieldWrapper, Label } from './styled'

interface InputProps extends FieldProps {
	placeholder?: string
}

export function Input<FormValues>({ label, name, placeholder }: InputProps) {
	return (
		<Field
			name={name}
			render={({ field, form }: FormikFieldProps<FormValues>) => (
				<FieldWrapper>
					<Label>{label}</Label>
					<input type="text" {...field} placeholder={placeholder} />
				</FieldWrapper>
			)}
		/>
	)
}
