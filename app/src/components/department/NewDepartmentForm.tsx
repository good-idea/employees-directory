import * as React from 'react'
import { Form, Input } from '../Form'
import { useMutation } from 'urql'
import {
	FormOnSubmit,
	MutationCreateDepartmentArgs,
	DepartmentCreateInput,
} from 'Types'
import { createDepartment, CreateDepartmentResponse } from 'Queries'

interface NewDepartmentFormProps {
	/* */
}

export const NewDepartmentForm = (props: NewDepartmentFormProps) => {
	const [response, mutate] = useMutation<
		CreateDepartmentResponse,
		MutationCreateDepartmentArgs
	>(createDepartment)

	const handleSubmit: FormOnSubmit<DepartmentCreateInput> = async (
		data,
		actions,
	) => {
		const result = await mutate({ data })
	}

	return (
		<Form onSubmit={handleSubmit} label="Create New Department">
			<Input name="name" label="Department Name" />
		</Form>
	)
}
