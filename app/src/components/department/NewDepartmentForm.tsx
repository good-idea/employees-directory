import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Form, Input } from '../Form'
import { useQuery, useMutation } from 'urql'
import {
	FormOnSubmit,
	MutationCreateDepartmentArgs,
	DepartmentCreateInput,
} from '../../types'
import {
	createDepartment,
	CreateDepartmentResponse,
	employeesQuery,
	EmployeesQueryResponse,
} from '../../queries'
import { EmployeeSelector } from '../employee'
import { generateDepartment } from '../../utils/generators'
import { Button } from '../Button'

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
	const [employeesResponse] = useQuery<EmployeesQueryResponse>({
		query: employeesQuery,
	})

	const employees = employeesResponse.data
		? unwindEdges(employeesResponse.data.employeesConnection)[0]
		: []

	/* State */
	const [initialValues, setInitialValues] = React.useState<Partial<FormValues>>(
		{},
	)

	/* Handlers */
	const handleGenerateClick = () => {
		const generated = generateDepartment(employees)
		setInitialValues(generated)
	}

	const handleSubmit: FormOnSubmit<FormValues> = async (values, actions) => {
		const { leadId, ...rest } = values
		const data = {
			/* only include the 'connect' object when the ID exists
			 * GraphQL will complain if you try to connect to an undefined ID */
			lead: leadId
				? {
						connect: {
							id: leadId,
						},
				  }
				: undefined,
			...rest,
		}

		const result = await mutate({ data })
	}

	return (
		<Form
			initialValues={initialValues}
			onSubmit={handleSubmit}
			label="Create New Department"
		>
			<Input name="name" label="Department Name" />
			<EmployeeSelector label="Department Lead" name="leadId" />
			<Button onClick={handleGenerateClick} type="button">
				Generate
			</Button>
		</Form>
	)
}
