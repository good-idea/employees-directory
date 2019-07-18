import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Form, Input, Selector } from '../Form'
import { useQuery, useMutation } from 'urql'
import {
	FormOnSubmit,
	MutationCreateEmployeeArgs,
	EmployeeCreateInput,
} from 'Types'
import { employeeFormQuery, EmployeeFormQueryResponse } from './queries'
import { createEmployee, CreateEmployeeResponse } from 'Queries'

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
	const [queryResponse] = useQuery<EmployeeFormQueryResponse>({
		query: employeeFormQuery,
	})

	const [, mutate] = useMutation<
		CreateEmployeeResponse,
		MutationCreateEmployeeArgs
	>(createEmployee)

	const { data } = queryResponse

	const offices =
		data && data.officesConnection ? unwindEdges(data.officesConnection)[0] : []
	const departments =
		data && data.departmentsConnection
			? unwindEdges(data.departmentsConnection)[0]
			: []

	/* Create options for the select menus */
	const departmentOptions = departments.map((d) => ({
		label: d.name,
		value: d.id,
	}))

	const officeOptions = offices.map((o) => ({
		label: o.name,
		value: o.id,
	}))

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
		// console.log(result)
	}

	return (
		<Form onSubmit={handleSubmit} label="Spawn Employee">
			<Input name="firstName" label="First Name" required />
			<Input name="lastName" label="Last Name" required />
			<Input name="email" label="Email Address" type="email" />
			<Selector
				name="departmentId"
				label="Department"
				placeholder="Select a Department"
				required
				options={departmentOptions}
			/>
			<Selector
				name="officeId"
				label="Office"
				placeholder="Select an Office"
				required
				options={officeOptions}
			/>
		</Form>
	)
}

// <Selector name="officeId" label="Office" options={departmentOptions} />
