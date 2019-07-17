import * as React from 'react'
import { Formik, FormikActions } from 'formik'

interface FormProps<FormValues> {
	/* */
	label: string
	initialValues?: Partial<FormValues>
	onSubmit: (values: FormValues, actions: FormikActions<FormValues>) => void
	children: React.ReactNode
}

export function Form<FormValues>({
	initialValues,
	label,
	onSubmit,
	children,
}: FormProps<FormValues>) {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			<React.Fragment>{children}</React.Fragment>
		</Formik>
	)
}
