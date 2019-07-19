import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from '../../types'
import { departmentsQuery, DepartmentsQueryResponse } from '../../queries'
import {
	NewDepartmentForm,
	DepartmentListItem,
} from '../../components/department'
import { List } from '../../components/List'
import { useBossMode } from '../../providers/BossMode'

interface DepartmentsProps extends RouteViewProps {
	/* */
}

export const Departments = (props: DepartmentsProps) => {
	const { bossMode } = useBossMode()
	const [response, refetchdepartments] = useQuery<DepartmentsQueryResponse>({
		query: departmentsQuery,
	})

	const departments =
		response.data && response.data.departmentsConnection
			? unwindEdges(response.data.departmentsConnection)[0]
			: []

	const departmentColumns = [
		{ title: 'Name', sortByKey: 'name' },
		{ title: 'Lead', sortByKey: 'lead.lastName' },
	]

	return (
		<div>
			{bossMode ? <NewDepartmentForm /> : null}
			<List title="Departments" columnCount={3} columns={departmentColumns}>
				{({ sort }) =>
					sort(departments).map((d) => (
						<DepartmentListItem key={d.id} department={d} />
					))
				}
			</List>
		</div>
	)
}
