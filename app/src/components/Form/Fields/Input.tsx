import * as React from 'react'
import { Field, FieldProps as FormikFieldProps } from 'formik'
import { FieldProps } from './types'
import { FieldWrapper, Label, StyledInput } from './styled'

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
          <Label htmlFor={field.name}>{label}</Label>
          <StyledInput
            {...field}
            type={type || 'text'}
            required={required}
            value={field.value}
            defaultValue=""
            placeholder={placeholder}
          />
        </FieldWrapper>
      )}
    />
  )
}
