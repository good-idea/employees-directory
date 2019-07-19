import * as React from 'react'
import { Form, Input } from '../Form'
import { useMutation } from 'urql'
import { FormOnSubmit, MutationCreateOfficeArgs } from 'Types'
import { createOffice, CreateOfficeResponse } from 'Queries'
import { Button } from '../Button'
import { generateOffice } from 'Utils/generators'

interface NewOfficeFormProps {
	/* */
}

interface FormValues {
	name: string
	location: string
}

export const NewOfficeForm = (props: NewOfficeFormProps) => {
	const [response, mutate] = useMutation<
		CreateOfficeResponse,
		MutationCreateOfficeArgs
	>(createOffice)

	/* State */
	const [initialValues, setInitialValues] = React.useState<Partial<FormValues>>(
		{},
	)

	/* Handlers */
	const handleGenerateClick = () => {
		const generated = generateOffice()
		setInitialValues(generated)
	}

	const handleSubmit: FormOnSubmit<FormValues> = async (values, actions) => {
		const result = await mutate({ data: values })
	}

	return (
		<Form
			initialValues={initialValues}
			onSubmit={handleSubmit}
			label="Spawn Office"
		>
			<Input name="name" label="Office Name" required />
			<Input name="location" label="Location" required />
			<Button onClick={handleGenerateClick} type="button">
				Generate
			</Button>
		</Form>
	)
}
