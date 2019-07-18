import * as React from 'react'
import { Form, Input } from '../Form'
import { useMutation } from 'urql'
import {
	FormOnSubmit,
	MutationCreateEmployeeArgs,
	EmployeeCreateInput,
} from 'Types'
import { createEmployee, CreateEmployeeResponse } from 'Queries'

interface NewEmployeeFormProps {
	/* */
}

export const NewEmployeeForm = (props: NewEmployeeFormProps) => {
	const [response, mutate] = useMutation<
		CreateEmployeeResponse,
		MutationCreateEmployeeArgs
	>(createEmployee)

	console.log(createEmployee)

	const handleSubmit: FormOnSubmit<EmployeeCreateInput> = async (
		data,
		actions,
	) => {
		console.log(data)
		const result = await mutate({ data })
		console.log(result)
	}

	return (
		<Form onSubmit={handleSubmit} label="Spawn Employee">
			<Input name="firstName" label="First Name" required />
			<Input name="lastName" label="Last Name" required />
			<Input name="email" label="Email Address" type="email" />
		</Form>
	)
}
