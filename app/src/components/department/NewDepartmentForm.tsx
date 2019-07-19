import * as React from 'react'
import { Form, Input } from '../Form'
import { useMutation } from 'urql'
import {
	FormOnSubmit,
	MutationCreateDepartmentArgs,
	DepartmentCreateInput,
} from 'Types'
import { createDepartment, CreateDepartmentResponse } from 'Queries'
import { EmployeeSelector } from 'Components/Employee'

interface NewDepartmentFormProps {
	/* */
}

interface FormValues {
	name: string
	leadId: string
}

export const NewDepartmentForm = (props: NewDepartmentFormProps) => {
	const [response, mutate] = useMutation<
		CreateDepartmentResponse,
		MutationCreateDepartmentArgs
	>(createDepartment)

	const handleSubmit: FormOnSubmit<FormValues> = async (values, actions) => {
		const { leadId, ...rest } = values
		const data = {
			lead: {
				connect: {
					id: leadId,
				},
			},
			...rest,
		}

		const result = await mutate({ data })
	}

	return (
		<Form onSubmit={handleSubmit} label="Create New Department">
			<Input name="name" label="Department Name" />
			<EmployeeSelector name="leadId" />
		</Form>
	)
}
