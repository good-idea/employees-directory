import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Form, Input, Selector } from '../Form'
import { useQuery, useMutation } from 'urql'
import { FormOnSubmit, MutationCreateEmployeeArgs } from 'Types'
import { createEmployee, CreateEmployeeResponse } from 'Queries'
import { DepartmentSelector } from 'Components/department'
import { OfficeSelector } from 'Components/office'

interface NewEmployeeFormProps {
	/* */
}

interface FormValues {
	firstName: string
	lastName: string
	email: string
	departmentId: string
	officeId: string
}

export const NewEmployeeForm = (props: NewEmployeeFormProps) => {
	const [, mutate] = useMutation<
		CreateEmployeeResponse,
		MutationCreateEmployeeArgs
	>(createEmployee)

	/* Handlers */
	const handleSubmit: FormOnSubmit<FormValues> = async (values, actions) => {
		const { departmentId, officeId, ...rest } = values
		const data = {
			department: {
				connect: {
					id: departmentId,
				},
			},
			office: {
				connect: {
					id: officeId,
				},
			},
			...rest,
		}
		const result = await mutate({ data })
	}

	return (
		<Form onSubmit={handleSubmit} label="Spawn Employee">
			<Input name="firstName" label="First Name" required />
			<Input name="lastName" label="Last Name" required />
			<Input name="email" label="Email Address" type="email" />
			<DepartmentSelector name="departmentId" />
			<OfficeSelector name="officeId" />
		</Form>
	)
}
