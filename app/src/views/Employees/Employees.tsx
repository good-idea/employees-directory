import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { RouteViewProps } from 'Types'
import { useQuery, useMutation } from 'urql'
import { employeesQuery, EmployeesQueryResponse } from './queries'
import { NewEmployeeForm } from 'Components/employee'

interface EmployeesProps extends RouteViewProps {
	/* */
}

export const Employees = (props: EmployeesProps) => {
	const [response, refetchEmployees] = useQuery<EmployeesQueryResponse>({
		query: employeesQuery,
	})

	const employees =
		response.data && response.data.employeesConnection
			? unwindEdges(response.data.employeesConnection)[0]
			: []

	return (
		<div>
			<NewEmployeeForm />
			{employees.map((e) => (
				<p key={e.id}>{e.firstName}</p>
			))}
		</div>
	)
}
