import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { RouteViewProps } from 'Types'
import { useQuery, useMutation } from 'urql'
import { employeesQuery, EmployeesQueryResponse } from 'Queries'
import { NewEmployeeForm, EmployeeListItem } from 'Components/employee'
import { List } from 'Components/List'
import { useBossMode } from '../../providers/BossMode'

interface EmployeesProps extends RouteViewProps {
	/* */
}

export const Employees = (props: EmployeesProps) => {
	const { bossMode } = useBossMode()
	const [response, refetchEmployees] = useQuery<EmployeesQueryResponse>({
		query: employeesQuery,
	})

	const employees =
		response.data && response.data.employeesConnection
			? unwindEdges(response.data.employeesConnection)[0]
			: []

	const employeeColumns = [
		{ title: 'Name', sortByKey: 'lastName' },
		{ title: 'Department', sortByKey: 'department.name' },
		{ title: 'Office', sortByKey: 'office.name' },
	]

	return (
		<div>
			{bossMode ? <NewEmployeeForm /> : null}
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
