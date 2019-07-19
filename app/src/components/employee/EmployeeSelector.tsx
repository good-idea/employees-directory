import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { Selector } from '../Form'
import { EmployeeConnection } from 'Types'
import { employeeFragment } from 'Queries'
import { employeesQuery, EmployeesQueryResponse } from 'Queries'

interface EmployeeSelectorProps {
	name: string
	required?: boolean
	label?: string
}

export const EmployeeSelector = ({
	name,
	label,
	required,
}: EmployeeSelectorProps) => {
	const [queryResponse] = useQuery<EmployeesQueryResponse>({
		query: employeesQuery,
	})
	const { data } = queryResponse
	const employees =
		data && data.employeesConnection
			? unwindEdges(data.employeesConnection)[0]
			: []

	/* Create options for the select menu */
	const employeeOptions = employees.map((e) => ({
		label: `${e.lastName}, ${e.firstName}`,
		value: e.id,
	}))

	return (
		<Selector
			name={name}
			required={required}
			label={label || 'Employee'}
			placeholder="Select an Employee"
			options={employeeOptions}
		/>
	)
}
