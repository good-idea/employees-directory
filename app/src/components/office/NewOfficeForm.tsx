import * as React from 'react'
import { Form, Input } from '../Form'
import { useMutation } from 'urql'
import {
	FormOnSubmit,
	MutationCreateOfficeArgs,
	OfficeCreateInput,
} from 'Types'
import { createOffice, CreateOfficeResponse } from 'Queries'

interface NewOfficeFormProps {
	/* */
}

export const NewOfficeForm = (props: NewOfficeFormProps) => {
	const [response, mutate] = useMutation<
		CreateOfficeResponse,
		MutationCreateOfficeArgs
	>(createOffice)

	const handleSubmit: FormOnSubmit<OfficeCreateInput> = async (
		data,
		actions,
	) => {
		const result = await mutate({ data })
	}

	return (
		<Form onSubmit={handleSubmit} label="Spawn Office">
			<Input name="name" label="Office Name" required />
			<Input name="location" label="Location" required />
		</Form>
	)
}
