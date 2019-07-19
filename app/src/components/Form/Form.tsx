import * as React from 'react'
import { Formik, FormikProps, FormikActions } from 'formik'
import { FormOnSubmit } from '../../types'
import { StyledForm } from './styled'
import { Header2 } from '../Text'
import { Button } from '../Button'

interface FormProps<FormValues> {
  /* */
  label: string
  submitLabel?: string
  initialValues?: Partial<FormValues>
  onSubmit: FormOnSubmit<FormValues>
  children: React.ReactNode
}

export function Form<FormValues>({
  initialValues,
  label,
  submitLabel,
  onSubmit,
  children,
}: FormProps<FormValues>) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {(formProps: FormikProps<FormValues>) => {
        return (
          <StyledForm onSubmit={formProps.handleSubmit}>
            <Header2 family="display">{label}</Header2>
            <React.Fragment>{children}</React.Fragment>
            <Button disabled={formProps.isSubmitting} type="submit">
              {submitLabel || 'Submit'}
            </Button>
          </StyledForm>
        )
      }}
    </Formik>
  )
}
