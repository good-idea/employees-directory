import * as React from 'react'
import { Formik, FormikProps, FormikActions } from 'formik'
import { FormOnSubmit } from 'Types'

interface FormProps<FormValues> {
	/* */
	label: string
	initialValues?: Partial<FormValues>
	onSubmit: FormOnSubmit<FormValues>
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
			{(props: FormikProps<FormValues>) => (
				<form onSubmit={props.handleSubmit}>
					<React.Fragment>{children}</React.Fragment>
					<button type="submit">submit</button>
				</form>
			)}
		</Formik>
	)
}
