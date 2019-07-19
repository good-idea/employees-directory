import { FormikActions } from 'formik'
export * from './generated'

/* Props for all route-level components */

export interface RouteViewProps {
  path: string
  exact?: boolean
}

/* Form stuff */

export type FormOnSubmit<FormValues> = (
  values: FormValues,
  actions: FormikActions<FormValues>,
) => void
