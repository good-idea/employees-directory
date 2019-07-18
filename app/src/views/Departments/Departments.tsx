import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { RouteViewProps } from 'Types'
import { NewDepartmentForm } from 'Components/department'
import { departmentsQuery, DepartmentsQueryResponse } from './queries'

interface DepartmentsProps extends RouteViewProps {
	/* */
}

interface CreateDepartmentValues {
	title: string
	lead: string
}

export const Departments = (props: DepartmentsProps) => {
	const [response, refetchdepartments] = useQuery<DepartmentsQueryResponse>({
		query: departmentsQuery,
	})

	const departments =
		response.data && response.data.departmentsConnection
			? unwindEdges(response.data.departmentsConnection)[0]
			: []
	const handleSubmit = (values, actions) => {
		console.log(values, actions)
	}

	return (
		<div>
			<h1>departments</h1>
			<NewDepartmentForm />
			{departments.map((d) => (
				<p key={d.id}>{d.name}</p>
			))}
		</div>
	)
}
