import * as React from 'react'
import { Field, FieldProps } from 'formik'
import { FieldWrapper, Label } from './styled'

interface Option {
  value: string
  label: string
}

interface SelectorProps {
  options: Option[]
  label: string
  name: string
  placeholder: string
  initialValue?: string
  required?: boolean
}

export const Selector = ({
  name,
  label,
  initialValue,
  options,
  placeholder,
  required,
}: SelectorProps) => {
  return (
    <Field
      name={name}
      initialValue={initialValue}
      render={({ field, form }: FieldProps) => {
        return (
          <FieldWrapper>
            <Label htmlFor={name}>{label}</Label>
            <select
              required={required}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              name={name}
              value={field.value}
              defaultValue=""
            >
              <option value="" disabled={true}>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FieldWrapper>
        )
      }}
    />
  )
}
