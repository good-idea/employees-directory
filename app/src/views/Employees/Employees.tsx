import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery, useMutation } from 'urql'
import { RouteViewProps } from '../../types'
import { employeesQuery, EmployeesQueryResponse } from '../../queries'
import { NewEmployeeForm, EmployeeListItem } from '../../components/employee'
import { List } from '../../components/List'
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
