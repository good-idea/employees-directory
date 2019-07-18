import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { RouteViewProps } from 'Types'
import { useQuery, useMutation } from 'urql'
import { employeesQuery, EmployeesQueryResponse } from './queries'
import { NewEmployeeForm, EmployeeListItem } from 'Components/employee'
import { List } from 'Components/List'

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

	/* A tuple of [HeaderText, sortByKey] */
	const employeeColumns = [
		{ title: 'Name', sortByKey: 'lastName' },
		{ title: 'Department', sortByKey: 'department.name' },
		{ title: 'Office', sortByKey: 'office.name' },
	]

	return (
		<div>
			<NewEmployeeForm />
			<List title="Employees" columns={employeeColumns}>
				{({ sort }) =>
					sort(employees).map((e) => (
						<EmployeeListItem key={e.id} employee={e} />
					))
				}
			</List>
		</div>
	)
}
