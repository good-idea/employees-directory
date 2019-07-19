import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Form, Input, Selector } from '../Form'
import { useQuery, useMutation } from 'urql'
import { FormOnSubmit, MutationCreateEmployeeArgs } from 'Types'
import {
	departmentsQuery,
	DepartmentsQueryResponse,
	officesQuery,
	OfficesQueryResponse,
	createEmployee,
	CreateEmployeeResponse,
} from 'Queries'
import { DepartmentSelector } from 'Components/department'
import { OfficeSelector } from 'Components/office'
import { generateEmployee } from 'Utils/generators'
import { Button } from 'Components/Button'

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

	const [officeResponse] = useQuery<OfficesQueryResponse>({
		query: officesQuery,
	})
	const [departmentsResponse] = useQuery<DepartmentsQueryResponse>({
		query: departmentsQuery,
	})
	console.log(officeResponse.data)

	const offices = officeResponse.data
		? unwindEdges(officeResponse.data.officesConnection)[0]
		: []

	const departments = departmentsResponse.data
		? unwindEdges(departmentsResponse.data.departmentsConnection)[0]
		: []
	console.log(offices)

	const handleGenerateClick = () => {
		const generated = generateEmployee(departments, offices)
		setInitialValues(generated)
	}

	const [initialValues, setInitialValues] = React.useState<Partial<FormValues>>(
		generateEmployee(departments, offices),
	)

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

	console.log(initialValues)

	return (
		<Form
			onSubmit={handleSubmit}
			label="Spawn Employee"
			initialValues={initialValues}
		>
			<Input name="firstName" label="First Name" required />
			<Input name="lastName" label="Last Name" required />
			<Input name="email" label="Email Address" type="email" />
			<DepartmentSelector name="departmentId" />
			<OfficeSelector name="officeId" />
			<Button onClick={handleGenerateClick} type="button">
				Generate
			</Button>
		</Form>
	)
}
